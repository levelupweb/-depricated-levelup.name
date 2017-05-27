import React from 'react';
import Link from 'next/link'

export default class TagsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.tags.length > 0) {
      return (
        <div className="tag-list">
        	{this.props.tags.map((item) => {
        		return <Tag tag={item} key={item.id} />
        	})}
        </div>
      )
    } else {
      return (
        <div className="no-content">
          <p>Список пуст</p>
        </div>
      )
    }
  }
}


var Tag = (props) => {
	return (
		<div className="tag"><a href="#">{props.tag}</a></div>
	)
}