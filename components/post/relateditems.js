import React from 'react';
import User from '../user'

export default class RelatedItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block">
      		<div className="title">
	      	<h3 className="ui header">
	      		Возможно вам будет интересно 
	      	</h3>
	      </div>
	      <div className="grid-inline">
	      	<article className="article preview w-33">
				<div className="user">
					<User size="medium"  />
				</div>
				<div className="image">
					<img src="../static/img/feed/example-2.jpg" className="rounded ui image fluid" />
				</div>
				<div className="content">
					<a href="#"><h4>Мобильная платформа. Архитектура гибридных приложений на ReactNative</h4></a>
				</div>

				<a href="#">Читать далее</a>
			</article>
			<article className="article preview w-33">
				<div className="user">
					<User size="medium" />
				</div>
				<div className="image">
					<img src="../static/img/feed/example-2.jpg" className="rounded ui image fluid" />
				</div>
				<div className="content">
					<a href="#"><h4>Мобильная платформа. Архитектура гибридных приложений на ReactNative</h4></a>
				</div>

				<a href="#">Читать далее</a>
			</article>
			<article className="article preview w-33">
				<div className="user">
					<User size="medium" />
				</div>
				<div className="image">
					<img src="../static/img/feed/example-2.jpg" className="rounded ui image fluid" />
				</div>
				<div className="content">
					<a href="#"><h4>Мобильная платформа. Архитектура гибридных приложений на ReactNative</h4></a>
				</div>

				<a href="#">Читать далее</a>
			</article>

		</div>
		<style jsx>{`
			.block {
				padding-top:0px;
			}
		`}</style>
      </div>
    );
  }
}
