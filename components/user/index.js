import React from 'react';
import UserBar from './userbar'
import Feed from '../feed/'
import { connect } from 'react-redux'
import Comments from '../comments/index'

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
    			<div id="tabs-container">
    			    <ul className="tabs-menu">
  			        <li className="current"><a href="#publications">Публикации <span>0</span></a></li>
  			        <li><a href="#bookmarks">Закладки <span>0</span></a></li>
  			        <li><a href="#comments">Комментарии <span>0</span></a></li>
    			    </ul>
              <div className="ui divider"></div>
    			    <div className="tab">
  			        <div id="publications" className="tab-content">
  			           <Feed author={user._id} template="article" />
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
            #tabs-container {
              margin-top:15px;
            }
            .tabs-menu a {
              font-weight:bold
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