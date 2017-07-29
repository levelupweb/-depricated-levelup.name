import React from 'react'

export default class Advertisement extends React.Component {
  constructor(props) {
    super(props);
  }

  renderViews() {
    return this.getRandom(100, 500)
  }

  renderClicks() {
    return this.getRandom(10, 50)
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
  	const { advertisement, columns } = this.props
    if(advertisement) {
      const { title, image, description, _id, clicks, link, displayLink } = advertisement
      return (
          <div className="ui card">
  				  <div className="content">
  				    <a className="header" href={link} target="_blank">{title}</a>
  				    <div className="meta">
  				      <span>{clicks.length} кликов</span>
                <span><a href="#">Редактировать</a></span>
                <span><a href="#">Удалить</a></span>
  				    </div>
  				    <div className="description">
  				      {description}
  				    </div>
  				  </div>
  				  <div className="extra content">
  				    <a href={link} target="_blank">{displayLink}</a>
  				  </div>
            <style jsx>{`
              .card {
                margin-right:10px;
              }
              .content {
                margin-top:0px;
              }
            `}</style>
  				</div>
      );
    } else {
      return null
    }
  }
}