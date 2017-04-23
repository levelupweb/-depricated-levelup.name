import React from 'react';
import { connect } from 'react-redux'
import Link from 'next/link'

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="menu">
		  <Link href='/'>
        <a className="item"><b>Исследовать</b></a>
      </Link>
		  <a className="item">Авторы</a>
		  <a className="item">Блоги</a>
		  <a className="item">Рекламодателям</a>
		</div>
    );
  }
}


export default connect(state => state.header)(Menu)