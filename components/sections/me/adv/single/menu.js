import React from 'react';
import Link from 'next/link'
import { connect } from 'react-redux'

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCampaigns(campaigns, currentCampaignId) {
    return campaigns.map((campaign, i) => {
      return <Link key={i} href={{path: '/me/adv', query: {id: campaign._id}}}><a className={(currentCampaignId == campaign._id) ? "active item" : "item"}>
        {campaign.title}
      </a></Link>
    })
  }

  render() {
    const { campaigns, currentCampaign, onSave, isSomethingChanged, handMode, onChangeHandMode } = this.props;
    return (
      <div className="wrapper">
        <div className="ui vertical menu">
          <a className="item">
            На главную
          </a>
          <div className="item input">
            <div className="ui form mode">
              <div className="inline field">
                <div className="ui slider checkbox" onClick={() => {onChangeHandMode()}}>
                  <input value={handMode} type="checkbox" tabindex="0" className="hidden" />
                  <label>Ручной режим</label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <b>Мои кампании</b>
            <div className="menu">
              {this.renderCampaigns(campaigns, currentCampaign._id)}
            </div>
          </div>
          <a onClick={() => onSave()} className={isSomethingChanged ? 'item' : 'item disabled'}>
            Сохранить <i className="fa fa-save icon"></i>
          </a>
        </div>
        <style jsx>{`
          .wrapper {
            left:998px;
            margin-left:0px;
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