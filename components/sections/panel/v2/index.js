import React from 'react';

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	console.log('hello')
   return (
      <div>
      	<div className="sidebar block">
      		Hello World
      	</div>
      </div>
   );
  }
}
