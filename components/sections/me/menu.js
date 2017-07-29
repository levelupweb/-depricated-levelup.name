import React from 'react';
import Link from 'next/link'
import { connect } from 'react-redux'

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	const location = window.location.pathname
  	const query = '[href="'+location +'"]';
  	$(query).addClass('active')
  }		

  render() {
    return (
      <div className="wrapper">
        <div className="ui vertical menu">
          <Link href="/me"><a className="item">
            Профиль
          </a></Link>
          <div className="item">
            <i className="fa fa-cogs icon"></i> Настройки
            <div className="menu">
              <a className="item">Приватность</a>
              <a className="item">Информация</a>
              <a className="item">Лента</a>
            </div>
          </div>
          <Link href="/me/posts"><a className="item">
            Публикации
          </a></Link>
          <Link href="/me/adv"><a className="item">
            Панель рекламодателя
          </a></Link>
          <Link href="/me/statistic"><a className="item">
            Статистика
          </a></Link>
          <Link href="/me/achievments"><a className="item">
            Достижения
          </a></Link>
          <Link href="/me/transations"><a className="item">
            Трансляции
          </a></Link>
        </div>
        
        <style jsx>{`
          .wrapper {
            left:998px;
            top:90px;
            position:fixed;
            z-index:999;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
  	currentUser: state.currentUser,
  	app: state.app
  }
}


export default connect(mapStateToProps)(Menu)