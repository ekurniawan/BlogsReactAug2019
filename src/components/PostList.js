import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import MyTable from './MyTable';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const header = this.props.posts[0];
  
    return (
        <MyTable posts={this.props.posts} />
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
