import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPosts } from '../reducers/posts';

class Home extends Component {
  componentDidMount() {
    this.props.loadPosts('uncategorized');
  }

  render() {
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
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        <div className="max-width-12 mx-auto">
          <div className="clearfix mx3">
            <div className="col col-8">
              <div id="lil-about">
                <p>Chicago D(ART), or Deaf ART, is the creative home for artists looking to bridge the communication barrier between the d/Deaf and hearing worlds.</p>
              </div>
              <h2>News</h2>
              <ol className="event-list">
                {posts.map(post =>
                  <PostInList key={post.id} post={post} />
                )}
              </ol>
            </div>
            <div className="col col-4 center">
              <h2>Call to Action</h2>
              <div id="mini-cal">
                <h2>Calendar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function PostInList(props) {
  const post = props.post;
  return (
    <li className="event-in-list">
      <Link to={`/events/${post.slug}`}>
        <div className="event-in-list__display-img">
          <img src="http://lorempixel.com/400/300" alt="" />
        </div>
        <h3 className="event-in-list__title">{post.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Link>
    </li>
  );
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
