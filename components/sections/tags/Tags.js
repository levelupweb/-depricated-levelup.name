import React from 'react';
import { connect } from 'react-redux';
import cookies from 'js-cookie';
import Loader from '../../isomorphic/loader.js';
import { UI } from '../../../utils/initScripts.js';

import { 
  getTags, 
  findTag,
  getUserTags
} from '../../../actions/tag.js';

import {
  VIEW_POPULAR,
  VIEW_SUBSCRIPTIONS,
} from './Tags.consts.js';

import {
  renderInfiniteScroll,
  renderSearchInput,
  renderTags,
} from './Tags.render.js';

import {
  handleReceivedTagsBySearch,
  handleReceivedUserTags,
  handleUnFulfilled,
  UnHandleLoadedState,
  handleConcatNewTags,
  handleReceivedTags,
  handleLoadedState,
  handleFulfilled,
  defaultState,
  handleView,
} from './Tags.map.js';

const getTagsFromAPI = (request = {}, userId) => {
  if(userId) {
    return getUserTags(request, userId).then(response => {
      return response.data
    })
  } else {
    return getTags(request).then(response => {
      return response.data
    })
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { ...defaultState };
  }

  componentDidMount() {
    UI();
    highlightActiveLink(this.props.defaultView || VIEW_POPULAR)
  }

  componentWillMount() {
    const { tags, defaultView } = this.props;
    this.getInitialTags(tags, defaultView);
  }

  getInitialTags(tags, defaultView) {
    if(tags) {
      this.setState(state => 
        handleReceivedTags(state, tags)
      );
      getTagsFromAPI({}, this.props.currentUserId).then(tags => 
        this.setState(state =>
          handleReceivedUserTags(state, tags)
        )
      );
      this.setState(state => 
        handleView(state, defaultView || VIEW_POPULAR)
      );
    } else {
      getTagsFromAPI()
      .then(tags => this.setState(state => 
        handleReceivedTags(state, tags)
      ));
    }
  }

  fetchMoreTags(fetchRequestOptions) {
    getTagsFromAPI(fetchRequestOptions)
    .then(tags => {
      if(tags.length) {
        this.setState(state => 
          handleConcatNewTags(state, tags)
        );
      } else {
        this.setState(state =>
          handleFulfilled(state)
        );
      }
    })
  }

  fetchTagsByQueryString(queryString) {
    return findTag(queryString)
    .then(response => {
      this.setState(state => 
        handleReceivedTagsBySearch(state, response.data)
      );
    })
  }

  handleSearchTyping(searchingString) {
    if(searchingString.length) {
      this.setState({
        isHydrating: true
      }, this.fetchTagsByQueryString(searchingString));
    } else {
      this.setState(state =>
        handleReceivedTags(state, this.props.tags)
      );
      this.setState(state => ({
        ...state,
        isFull: false
      }))
    }
  }

  handleView(nextView) {
    highlightActiveLink(nextView, this.setState(state => 
      handleView(state, nextView), this.setState(newState => {
        if(newState.view == VIEW_SUBSCRIPTIONS) {
          return handleFulfilled(newState)
        } else {
          return handleUnFulfilled(newState)
        }
      })
    ))

  }

  switchRenderedTags(currentView) {
    const { tags, subscriptions } = this.state;
    switch(currentView) {
      case VIEW_POPULAR:
      return tags
      case VIEW_SUBSCRIPTIONS:
      return subscriptions
      default:
      return tags
    }
  }

  render() {
    const { isLoaded, isFull, perPage, 
      view, tags, subscriptions } = this.state;

    const infiniteScrollOptions = {
      tags: this.switchRenderedTags(view),
      isFull,
      fetchMoreTags() {
        self.fetchMoreTags({
          perPage,
          skip: tags.length
        })
      }
    }

    const self = this;
    return (
      <div className="blocks page-tags">
        <div className="block-item" style={{borderBottom:0,paddingBottom:0}}>
          <div className="ui secondary pointing menu">
            <a id={VIEW_POPULAR} onClick={() => 
              this.handleView(VIEW_POPULAR)
            } className="item">
              Популярные
            </a>
            <a id={VIEW_SUBSCRIPTIONS} onClick={() => 
              this.handleView(VIEW_SUBSCRIPTIONS)
            } className="item">
              Мои подписки
            </a>
          </div>
        </div>
        <div className="block-item">
          <div className="search" style={{padding:'0 15px'}}>
            <div className="ui form">
              <div className="field">
                {renderSearchInput((e) => { this.handleSearchTyping(e.target.value)})}
              </div>
           </div>
          </div>
        </div>
        <div className="block-item">
          {renderInfiniteScroll(infiniteScrollOptions)}
        </div>
      </div>
    )
  }
}

function highlightActiveLink(currentViewTitle, cb) {
  const allLinks = document.querySelectorAll('.page-tags .menu .item');
  const linkElement = document.getElementById(currentViewTitle);
  linkElement.classList.add('active');
  allLinks.forEach(link => {
    if(link.id != currentViewTitle) {
      link.classList.remove('active')
    }
  })
  if(cb) return cb()
}

const mapStateToProps = (state) => ({
  tags: state.app.pageData.tags,
  currentUser: state.currentUser,
  currentUserId: state.currentUser._id
})

export default connect(mapStateToProps)(Tags)

