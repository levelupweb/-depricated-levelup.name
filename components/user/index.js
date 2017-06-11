import React from 'react';
import UserBar from './userbar'
import Feed from '../feed/feed.js'
import { connect } from 'react-redux'
import Comments from '../comments/index'
import { UI } from '../../utils/initscripts.js'

class UserSingle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    var data = this.props.app.pageData.user;
    if(data !== null) {
      this.setState({
        user: data
      })
    }
  }

  componentWillReceiveProps() {
    var data = this.props.app.pageData.user;
    if(data !== null) {
      this.setState({
        user: data
      })
    }
  }

  componentDidMount() {
    UI()
    var tabs = document.querySelectorAll('.tabs-menu a');
    tabs.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        document.dispatchEvent(createGrid);
      })
    })

  	$(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).addClass('hidden');
        $(tab).removeClass('hidden');
    });
  }


  render() {
    var user = this.state.user
    if(user) {
      return (
        <div className="profile-feed feed">
        	<UserBar userdata={user} />
    			<div id="tabs-container" className="block block-shadow">
              <ul className="tabs-menu">
                <li className="current"><a href="#publications">
                  Публикации
                </a></li>
                <li><a href="#bookmarks">
                  Закладки
                </a></li>
                <li><a href="#comments">
                  Комментарии
                </a></li>
              </ul>
    			    <div className="tab">
  			        <div id="publications" className="tab-content">
  			          <Feed userID={user._id} />
  			        </div>
  			        <div id="bookmarks" className="tab-content hidden">
  			           <Feed template="listarticle" />
  			        </div>
  			        <div id="comments" className="tab-content hidden">
  			           <Comments />
  			        </div>
    			    </div>
    			</div>
          <style jsx>{`
            .tabs-menu {
              display:flex;
              align-items:center;
              list-style-type:none;
              padding:0px;
              margin:0px;
            }
            .tabs-menu li {
              margin-right:14px;
              padding-bottom:6px;
            }
            .tabs-menu li a {
              font-size:16px;
              color:#000;
            }
            .tabs-menu li.current {
              border-bottom:1px solid #000;
              padding-bottom:5px;
            }
            .tab {
              margin-top:25px;
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div>Пользователь не найден</div>
      )
    }
  }
}

export default connect(state => state)(UserSingle)