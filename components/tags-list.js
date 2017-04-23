import React from 'react';

export default class TagsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tag-list">
      	{this.props.tags.map((item) => {
      		return <Tag data={item} key={item.id} />
      	})}
      </div>
    );
  }
}


var Tag = (props) => {
	return (
		<div className="tag"><a href="#">{props.data.title}</a></div>
	)
}