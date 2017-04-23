import React from 'react';

export default class Loader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui active centered inline loader"></div>
    );
  }
}
