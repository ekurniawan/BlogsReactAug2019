import React from "react";
import _ from "lodash";

class MyTable extends React.Component {
  renderList() {
    return this.props.posts.map(post => {
      return (
        <tr key={post.id}>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      );
    });
  }

  renderHeader() {
    //_.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
    const header = this.props.posts[0];
    return _.keys(header).map(key => {
      return <th key={key}>{key}</th>;
    });
  }

  render() {
    return (
      <div>
        <table className="ui celled striped table">
          <thead>
            <tr>{this.renderHeader()}</tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
