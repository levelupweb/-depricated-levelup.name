import React from 'react';
import dateformat from 'dateformat'

import Link from 'next/link'

export default class Campaigns extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCampaigns(campaigns) {
    return campaigns.map((campaign, i) => {
      return <Campaign campaign={campaign} key={i} />
    })
  }

  render() {
    const { campaigns } = this.props
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Состояние</th>
            <th>Сроки</th>
            <th>Просмотры</th>
            <th>Клики</th>
            <th>Бюджет</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCampaigns(campaigns)}
        </tbody>
        <style jsx>{`
          .table {
            width:100%
          }
        `}</style>
      </table>
    );
  }
}



class Campaign extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStatus(status) {
    switch(status) {
      case 'published':
      return 'Идут показы'
      case 'paused':
      return 'Показы приостановлены'
      case 'moderation':
      return 'Проверяется модератором'
      default: 
      return 'Приостановлена'
    }
  }

  renderDating(dating) {
    if(dating.start) {
      return `С ${dateformat(dating.start, "dd/mm/yy")} по ${dateformat(dating.end, "dd/mm/yy")}`
    } else {
      return 'Без ограничений'
    }
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
  	const { campaign } = this.props
    if(campaign) {
      const { title, status, targeting, dating, limits, advertisements, budget, _id } = campaign
      return (
        <tr>
          <td>
            <h4 className="ui header">
              <div className="content">
                <Link href={{ pathname: '/me/adv', query: { id: _id }}}>
                  <a><strong>{title}</strong></a>
                </Link>
                <div className="sub header">
                  <a href="#">Остановить</a> <a href="#">Настройки</a>
                </div>
              </div>
            </h4>
          </td>
          <td>
            {this.renderStatus(status)}
          </td>
          <td>
            {this.renderDating(dating)}
          </td>
          <td>
            {this.renderViews()}
          </td>
          <td>
            {this.renderClicks()}
          </td>
          <td>
            {budget}
          </td>
        </tr>
      );
    } else {
      return null
    }
  }
}

/* <div className="campaign">
        <h3 className="ui header">
          {campaign.title}
          <div>
          <small>Кампания действует с {dateformat(campaign.dating.start, "dd/mm/yy")} по {dateformat(campaign.dating.end, "dd/mm/yy")}</small>
          </div>
        </h3>
        
      </div> */