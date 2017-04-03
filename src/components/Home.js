import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../reducers/posts';

import HeroImage from './HeroImage';
import Sidebar from './Sidebar';

class Home extends Component {
  componentDidMount() {
    this.props.loadPosts('events');
  }

  render() {
    const { page } = this.props;
    const posts = Object.keys(this.props.posts).map(key => this.props.posts[key]).sort((a, b) => {
      const dateA = new Date(a.date_gmt);
      const dateB = new Date(b.date_gmt);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });

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
          {!!posts && posts.map(post =>
            <PostInList key={!!post && post.id} post={post} />
          )}
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
