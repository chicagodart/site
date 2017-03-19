import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../reducers/posts';

class SingleEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      cast: this.props.cast,
      description: this.props.description,
      img: this.props.img,
      dateRange: this.props.dateRange,
      reviews: this.props.reviews
    };
  }

  componentDidMount() {
    this.props.loadPost(this.props.match.params.slug);
  }

  render() {
    const post = this.props.post;
    if (!post) return <div />;
    return (
      <div>

        <div>
          <div>
            <h2>About the Show</h2>
            <h3>{post.title.rendered}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <p>{this.state.dateRange}</p>
          </div>

          <div>
            <h3>Cast/Artists</h3>
            <p>cast: {this.state.cast}</p>
          </div>

          <div>
            <p>reviews: {this.state.reviews}</p>
          </div>

        </div>

        <div>
          <h1>Buy Tix button</h1>
          <h1>Other Info</h1>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = { loadPost };

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
