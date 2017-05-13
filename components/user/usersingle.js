import React from 'react';
import UserBar from './userbar'
import Feed from '../feed/'
import { connect } from 'react-redux'
import Comments from '../comments/index'

class UserSingle extends React.Component {

  constructor(props) {
    super(props);
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
    return (
      <div>
      	<UserBar />
      	<div className="profile-feed feed">
    			<div id="tabs-container">
    			    <ul className="tabs-menu">
  			        <li className="current"><a href="#publications">Публикации <span>3</span></a></li>
  			        <li><a href="#bookmarks">Закладки <span>23</span></a></li>
  			        <li><a href="#comments">Комментарии <span>15</span></a></li>
    			    </ul>
              <div className="ui divider"></div>
    			    <div className="tab">
  			        <div id="publications" className="tab-content">
  			           <Feed template="article" />
  			        </div>
  			        <div id="bookmarks" className="tab-content hidden">
  			           <Feed template="listarticle" />
  			        </div>
  			        <div id="comments" className="tab-content hidden">
  			           <Comments />
  			        </div>
    			    </div>
    			</div>	
		    </div>
      </div>
    );
  }
}

export default connect(state => state.usersingle)(UserSingle)