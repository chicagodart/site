import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { loadPosts } from '../reducers/posts';

import HeroImage from './HeroImage';
import Sidebar from './Sidebar';
import EventCard from './EventCard';

class Home extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderNews(posts) {
    posts = posts.map((post) => {
      const newPost = { ...post };
      newPost.orderByDate = newPost.acf.end_date ? newPost.acf.end_date : newPost.date;
      return newPost;
    });
    const postsOrdered = _.orderBy(posts, ['orderByDate'], ['desc']);
    const postsInPairs = [];
    for (let i = 0; i < postsOrdered.length; i += 2) {
      postsOrdered[i + 1]
      ? postsInPairs.push([postsOrdered[i], postsOrdered[i + 1]])
      : postsInPairs.push([postsOrdered[i]]);
    }

    return postsInPairs.map((postPair, i) => (
      <div key={i} className="mxn2 event-row">
        <div className="event col col-6 px2">
          <EventCard event={postPair[0]} />
        </div>
        {
          postPair[1] && <div className="event col col-6 px2">
            <EventCard event={postPair[1]} />
          </div>
        }
      </div>
      ));
  }

  render() {
    const { page } = this.props;
    const posts = Object.keys(this.props.posts).map(key => this.props.posts[key]);
    return (
      <div>
        <HeroImage src={page ? page.acf.hero_image.sizes.medium_large : ' '} alt={page ? page.acf.hero_image.title : ' '} />
        <div className="max-width-12">
          <div className="clearfix content-excerpt-section">
            <div className="sm-col sm-col-6 px3">
              <div dangerouslySetInnerHTML={{ __html: page ? page.content.rendered : '' }} />
            </div>
            <div className="sm-col sm-col-6 px3">
              <p>
                {!!page && page.acf.call_to_action}
              </p>
            </div>
          </div>
        </div>
        <h2>News</h2>
        <ol className="event-list">
          {!!posts && this.renderNews(posts) }
        </ol>
      </div>
    );
  }
}

function PostInList(props) {
  const { post } = props;
  const img = post.content.rendered.slice(0, post.content.rendered.indexOf('</') + 4);
  const content = post.content.rendered.slice(post.content.rendered.indexOf('</') + 4);
  return (
    <li className="event-in-list">
      <Link to={`/events/${post.slug}`}>
        <div className="event-in-list__display-img">
          <div dangerouslySetInnerHTML={{ __html: img }} />
        </div>
        <h3 className="event-in-list__title">{post.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Link>
    </li>
  );
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
