import React from 'react';
import applyStyles from 'next-style-loader/applyStyles';
import modalStyles from './modal.css';

import {
	MODAL_SHOW,
	MODAL_HIDE
} from './Modal.consts.js'

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	$(this.modalWindow).modal(this.props.isActive ? MODAL_SHOW : MODAL_HIDE)
  }
  componentWillReceiveProps(nextProps) {
  	$(this.modalWindow).modal(nextProps.isActive ? MODAL_SHOW : MODAL_HIDE)
  }
  render() {
  	const { title, children, handler } = this.props;
    return (
    	<div className="modal-wrapper">
      	<div className="ui modal basic small blocks" ref={e => {this.modalWindow = e}}>
      		<div className="block-item">
      			<h3 className="header ui inverted">{title}</h3>
      		</div>
      		<div style={{padding: 0}} className="content">
      			<div className="description">
      				{children}
      			</div>
      		</div>
      	</div>
      	<span>
					{React.cloneElement(handler, { 
						onClick: () => {registerModalAndDisplay(this.modalWindow)} 
					})}
				</span>
      </div>
    );
  }
}

function registerModalAndDisplay(el) {
	$(el).modal({ blurring: true, observeChanges: true })
  .modal('setting', 'transition', 'fade')
  .modal('show');
}

export default applyStyles(modalStyles)(Modal);
