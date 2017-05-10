import React from 'react';
import Link from 'next/link'

export class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui segments">
      	<div className="ui segment">
        <h3 className="ui header">Посты
          <div className="sub header">
          Редактирование и добавление
          </div>
        </h3>
        </div>
        <div className="ui segment">
          Посты
        </div>
        <div className="ui segment">
          <AddPost />
        </div>
      </div>
    );
  }
}

class AddPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Link href="/editor"><a className="large circular ui button primary">Добавить пост</a></Link>
		)
	}
}
