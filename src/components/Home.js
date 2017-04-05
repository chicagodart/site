import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { loadPosts } from '../reducers/posts';

import HeroImage from './HeroImage';
// import Sidebar from './Sidebar';
import EventCard from './EventCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postPairsPerPage: 2
    };

    this.handleClick = this.handleClick.bind(this);
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  addActiveClass(num) {
    console.log(num === this.state.currentPage);
    return num === this.state.currentPage ? 'active' : '';
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  renderNews(posts) {
    const postsWithOrderByDate = posts.map((post) => {
      const newPost = { ...post };
      newPost.orderByDate = newPost.acf.end_date ? new Date(newPost.acf.end_date) : new Date(newPost.date);
      return newPost;
    });
    const postsOrdered = _.orderBy(postsWithOrderByDate, ['orderByDate'], ['desc']);
    const postsInPairs = [];
    for (let i = 0; i < postsOrdered.length; i += 2) {
      if (postsOrdered[i + 1]) postsInPairs.push([postsOrdered[i], postsOrdered[i + 1]]);
      else postsInPairs.push([postsOrdered[i]]);
    }

    const { currentPage, postPairsPerPage } = this.state;
    const indexOfLastPostPair = currentPage * postPairsPerPage;
    const indexOfFirstPostPair = indexOfLastPostPair - postPairsPerPage;
    const currentPagePosts = postsInPairs.slice(indexOfFirstPostPair, indexOfLastPostPair);

    return currentPagePosts.map((postPair, i) => (
      <div key={i} className="mxn2 sm-mxn2 event-row">
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

  renderPageNumbers() {
    const pageNumbers = [];
    const numOfPostPairs = Object.keys(this.props.posts).length / 2;
    for (let i = 1; i <= Math.ceil(numOfPostPairs / this.state.postPairsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.length === 1 ? null : pageNumbers.map(number => (
      <li key={number}>
        <button id={number} className={this.addActiveClass(number)} onClick={this.handleClick}>
          {number}
        </button>
      </li>
    ));
  }


  render() {
    const { page } = this.props;
    const posts = Object.keys(this.props.posts).map(key => this.props.posts[key]);
    return (
      <div>
        <div className="max-width-12">
          <div className="clearfix home-content">
            <div className="sm-col sm-col-8 px2" id="lil-about-box">
              <div dangerouslySetInnerHTML={{ __html: page ? page.content.rendered : '' }} id="lil-about-text" />
            </div>
            <div className="sm-col sm-col-4 px2" id="call-to-action-box">
              <div dangerouslySetInnerHTML={{ __html: page ? page.acf.call_to_action : '' }} id="call-to-action-text" />
            </div>
          </div>
        </div>
        <h2 className="page-title">News</h2>
        <ol className="event-list">
          {!!posts && this.renderNews(posts) }
        </ol>
        <ul className="pagination-container">
          {!!posts && this.renderPageNumbers() }
        </ul>
      </div>
    );
  }
}

// function PostInList(props) {
//   const { post } = props;
//   const img = post.content.rendered.slice(0, post.content.rendered.indexOf('</') + 4);
//   const content = post.content.rendered.slice(post.content.rendered.indexOf('</') + 4);
//   return (
//     <li className="event-in-list">
//       <Link to={`/events/${post.slug}`}>
//         <div className="event-in-list__display-img">
//           <div dangerouslySetInnerHTML={{ __html: img }} />
//         </div>
//         <h3 className="event-in-list__title">{post.title.rendered}</h3>
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       </Link>
//     </li>
//   );
// }

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
