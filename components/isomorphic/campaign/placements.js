import React from 'react';

export default class Placements extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlacements(placements, action, isDisabled) {
  	return placements.map((placement, i) => {
  		return <Placement disabled={isDisabled} action={action} placement={placement} key={i} />
  	})
  }

  render() {
  	const { placements, action, disabled } = this.props;
  	if(placements.length != 0) {
	    return (
	      <div className="ui list">
	      	{this.renderPlacements(placements, action, disabled)}
	      </div>
	    )
	  } else {
	  	return (
	  		<p className="no-content">Ничего не найдено..</p>
	  	)
	  }
  }
}


class Placement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { placement, action, disabled } = this.props;
    return (
    	<div className="wrapper">
	    	<div className="item">
			    <img className="ui avatar image" src={placement.image} />
			    <div className="content">
			      <a className="header">{placement.fullName || placement.title}</a>
			      <div className="description">{(placement.rate) ? placement.rate + ' руб./1 клик' : 'Цена не назначена'}</div>
			    </div>
			  </div>
			  <div className="actions">
			  	{action == 'remove' ?
			  		<div className={!disabled ? 'ui button basic mini disabled' : 'ui button basic mini'}><i className="fa fa-close"></i></div> :
			  		<div className={!disabled ? 'ui button basic mini disabled' : 'ui button basic mini'}><i className="fa fa-plus"></i></div>
			  	}
			  </div>
			  <style jsx>{`
					.wrapper {
						display:flex;
						justify-content:space-between;
						align-items:center;
						border-bottom:1px solid #eee;
						padding-bottom:5px;
						margin-bottom:5px;
					} 
					.item {
						display:flex;
						align-items:center;
					}
					.item .content {
						margin-left:12px;
					}
		    `}</style>
			</div>
    )
  }
}

