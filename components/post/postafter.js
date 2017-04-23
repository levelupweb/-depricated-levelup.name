import React from 'react';
import Comments from './comments'
import RelatedItems from './relateditems'

export default class PostAfter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Comments />
      <div className="ui divider"></div>
      <RelatedItems />
      </div>
    );
  }
}
