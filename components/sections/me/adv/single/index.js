import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dateformat from 'dateformat'
import dynamic from 'next/dynamic'
import moment from 'moment'

// utils
import { UI } from '../../../../../utils/initScripts.js'

// actions
import { handleSuccess, handleError, handleWarn } from '../../../../../actions/app.js'
import { getUserCampaigns } from '../../../../../actions/user.js'
import { updateCampaign, findOffers } from '../../../../../actions/campaign.js'
import { findTag } from '../../../../../actions/tag.js'

// components
import Avatar from 'react-avatar'
import Menu from './menu.js'
import Link from 'next/link'
import TimeAgo from 'timeago-react';
import CreateCampaign from '../../../../isomorphic/campaign/create.js'
import Placements from '../../../../isomorphic/campaign/placements.js'
import AdvertisementForm from '../../../../isomorphic/advertisement/AdvertisementForm.js'
import Advertisements from '../../../../isomorphic/advertisement/Advertisements.js'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import InputRange from 'react-input-range';
import Select from 'react-select';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.state = {
      offers: [],
      campaign: {},
      campaigns: [],
      isDatingEditing: false,
      isSomethingChanged: false,
      isCreating: false
    }
  }

  componentWillMount() {
    const { campaign, currentUser } = this.props;
  	this.setState({
      data: getData(30),
      campaign: {
        ...campaign,
        dating: {
          start: moment(campaign.dating.start),
          end: moment(campaign.dating.end)
        }
      }
    })
    getUserCampaigns(currentUser._id, 5, 0).then((response) => {
      this.setState({
        campaigns: response.data
      })
    })
    findOffers(campaign._id).then((response) => {
      this.setState({
        offers: response.data
      })
    })

  }

  componentWillReceiveProps(nextProps) {
    const { campaign } = nextProps;
    this.setState({
      data: getData(30),
      campaign: {
        ...campaign,
        dating: {
          start: moment(campaign.dating.start),
          end: moment(campaign.dating.end)
        }
      }
    })
    findOffers(campaign._id).then((response) => {
      this.setState({
        offers: response.data
      })
    })
  }

  componentDidMount() {
    UI();
    moment.locale('ru-ru');
    $('.ui.checkbox').checkbox()
    $('.dropdown').dropdown({
      onChange: (value) => {
        this.handleChange(this.setState({
          campaign: {
            ...this.state.campaign,
            targeting: {
              ...this.state.campaign.targeting,
              gender: value
            }
          }
        }))
      }
    })
  }

  // specific methods
  pushAdvertisement(advertisement) {
    this.setState({
      isCreating: false,
      campaign: {
        ...this.state.campaign,
        advertisements: [advertisement, ...this.state.campaign.advertisements]
      }
    })
  }

  // handle methods
  handleStatus(token, status) {
    const campaign = {
      ...this.state.campaign,
      status
    }
    this.handleSave(token, campaign)
  }

  handleChange(callback) {
    this.setState({
      isSomethingChanged: true
    })
    return callback
  }

  handleSave(token, campaign) {
    const { dispatch } = this.props;
    dispatch(updateCampaign(token, campaign._id, campaign))
    .then((response) => {
      const { success, campaign, errors } = response.data;
      if(success) {
        this.setState({ 
          campaign,
          isSomethingChanged: false
        })
        dispatch(handleSuccess('Кампания успешно обновлена'))
      } else {
        dispatch(handleError('Ошибка при обновлении кампании'))
      }
    })
  }

  handleTags(value) {
    const { campaign } = this.state;
    value.map((item, i) => {
      this.handleChange(this.setState({
        campaign: {
          ...campaign,
          tags: [...campaign.tags, item.value]
        }
      }))
    })
  }

  handleTagsRemove(i) {
    const { tags } = this.state.campaign;
    let newTags = [...tags.slice(0, i), ...tags.slice(i + 1, tags.length)]
    this.setState({
      campaign: {
        ...this.state.campaign,
        tags: newTags
      }
    })
  }

  handleTagsSearch(input) {    
    return findTag(input)
    .then((response) => {
      return response.data;
    }).then((tags) => {
      return { options: tags.map((tag) => {
        return {
          value: tag.slug,
          label: tag.title
        }
      })}
    }); 
  }

  // render methods
  renderDating(dating) {
    if(dating.start) {
      return `С ${dateformat(dating.start, "dd/mm/yy")} по ${dateformat(dating.end, "dd/mm/yy")}`
    } else {
      return 'Без ограничений'
    }
  }

  renderTags(tags) {
    if(tags.length != 0) {
      return tags.map((tag, i) => {
        return <a key={i} className="ui label">
          {tag} <i onClick={() => this.handleTagsRemove(i)} className="fa fa-close delete icon"></i>
        </a>
      })
    } else {
      return <p className="no-content">Тэгов нет</p>
    }
  }

  renderStatus(status) {
    switch(status) {
      case 'published':
      return 'Кампания активна'
      case 'paused':
      return 'Кампания приостановлена';
      case 'moderation':
      return 'Кампания проверяется модератором'
      case 'blocked':
      return 'Кампания заблокирована'
    }
  }

  render() {
    const { campaign, campaigns, isSomethingChanged, isCreating } = this.state;
    if (campaign) {
      const { handMode, title, status, targeting, dating, limits, 
        advertisements, budget, _id, updated, tags, clicks, placements } = campaign
      return (
        <div className="module-wrapper">
          <Menu 
            onChangeHandMode={() => this.setState({campaign: {...campaign, handMode: !campaign.handMode}})}
            handMode={handMode}
            campaigns={campaigns} 
            currentCampaign={campaign}
            onSave={() => {this.handleSave(this.token, campaign)}}
            isSomethingChanged={isSomethingChanged} />
        	<div className="inner blocks">
            <div className="block-item">
              <div className="block-section">
                <div className="head">
                   <div className="ui statistics mini">
                    <div className="statistic">
                      <div className="value">
                        0
                      </div>
                      <div className="label">
                        Показов
                      </div>
                    </div>
                    <div className="statistic">
                      <div className="value">
                        {clicks.length}
                      </div>
                      <div className="label">
                        Кликов
                      </div>
                    </div>
                    <div className="statistic">
                      <div className="value">
                        0
                      </div>
                      <div className="label">
                        Закрытий
                      </div>
                    </div>
                    <div className="statistic">
                      <div className="value">
                        {placements.users.length + placements.blogs.length}
                      </div>
                      <div className="label">
                        Площадок
                      </div>
                    </div>
                    <div className="statistic">
                      <div className="value">
                        0%
                      </div>
                      <div className="label">
                        CTR
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <div className="description">
                      {this.renderStatus(campaign.status)}
                    </div>
                    <div className="actions">
                      <button onClick={() => {this.handleStatus(this.token, 'published')}} disabled={status == 'moderation' || status == 'blocked' || status == 'published'} href="#" className='ui button basic'>
                        <i className="fa fa-play"></i>
                      </button>
                      <button onClick={() => {this.handleStatus(this.token, 'paused')}} disabled={status == 'moderation' || status == 'blocked' || status == 'paused'} href="#" className="ui button basic">
                        <i className="fa fa-pause"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          		<div className="block-section">
                <div className="chart">
                  <LineChart width={960} height={300} data={this.state.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="Клики" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="Просмотры" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Закрытия" stroke="#b38d20" />
                  </LineChart>
                </div>
              </div>
            </div>
            <div className="block-item">
              <div className="block-section">
                <div className="basic">
                  <div className="ui grid three columns">
                    <div className="column">
                      <h3 className="ui header">
                        Баланс
                      </h3>
                      <div className="ui horizontal list">
                        <div className="item">
                          <div className="content">
                            <div className="header">{budget} руб.</div>
                            Остаток
                          </div>
                        </div>
                        <div className="item">
                          <div className="content">
                            <div className="header">0 руб.</div>
                            Потрачено
                          </div>
                        </div>
                      </div>
                       <p>{budget == 0 ? 'Ваш баланс пуст. Кампания приостановлена' : 'Деньги на балансе есть. Кампания активна'}</p> 
                      <a href="#" className="ui button basic">Пополнить</a>
                      <h3 className="ui header">
                        Ключевые слова
                      </h3>
                      <p>Ключевые слова, которые помогут в подборе площадок для ваших объявлений</p>
                      <p>{this.renderTags(tags)}</p>
                      <Select.Async
                        name="form-field-name"
                        multi={true}
                        disabled={tags.length >= 5}
                        loadingPlaceholder="Поиск..."
                        searchPromptText="Начните вводить.."
                        placeholder="Добавьте тэг.."
                        noResultsText="Результатов нет"
                        onChange={(value) => {this.handleTags(value)}}
                        loadOptions={this.handleTagsSearch} 
                      />
                      
                    </div>
                    <div className="column">
                      <h3 className="ui header">
                        Аудитория
                      </h3>
                      <p>Выберите подходящую аудиторию, чтобы наша система предложила вам новые площадки для размещения</p>
                      <form className="ui form">
                        <div className="field">
                          <label>Пол</label>
                          <div className="ui selection dropdown fluid">
                            <input type="hidden" defaultValue={campaign.targeting.gender} />
                            <i className="dropdown icon"></i>
                            <div className="default text">Пол</div>
                            <div className="menu">
                              <div className="item" data-value="male">Мужской</div>
                              <div className="item" data-value="female">Женский</div>
                              <div className="item" data-value="all">Все</div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Возраст аудитории</label>
                          <div className="range">
                            <InputRange
                              draggableTrack
                              maxValue={100}
                              minValue={0}
                              onChange={(value) => {this.handleChange(this.setState({
                                campaign: {
                                  ...campaign, 
                                  targeting: { 
                                    ...campaign.targeting,
                                    age: value
                                  }
                               }}))}}
                              value={campaign.targeting.age} />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="column">
                      <h3 className="ui header">
                        Сроки проведения
                      </h3>
                      <p>При необходимости вы всегда сможете поменять сроки проведения рекламной кампании</p>
                      <DateRangePicker
                        startDate={moment(dating.start)} 
                        endDate={moment(dating.end)}
                        onDatesChange={({ startDate, endDate }) => this.handleChange(this.setState({ campaign: { ...campaign, dating: { start: moment(startDate), end: moment(endDate) } } }))} 
                        focusedInput={this.state.focusedInput} 
                        onFocusChange={focusedInput => this.setState({ focusedInput })} 
                        startDatePlaceholderText="Начало"
                        endDatePlaceholderText="Конец" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-section">
                <div className={(handMode) ? "grid ui two columns" : "grid ui two columns disabled"}>
                  <div className="column">
                    <h3 className="header ui">Площадки</h3>
                    <p>Список площадок, на которых размещаются ваши объявления. Также указана цена, за которую вы выкупаете каждый клик</p>
                    <Placements disabled={handMode} action="remove" placements={campaign.placements.users} />
                  </div>
                  <div className="column">
                    <h3 className="header ui">Предложения</h3>
                    <p>Список площадок, которые предлагает система. Меняйте настройки рекламной кампании, чтобы система могла составить новый список</p>
                    <Placements disabled={handMode} action="add" placements={[]} />
                  </div>
                </div>
              </div>
              <div className="block-section">
                <div className="grid ui one columns">
                  <div className="column">
                    <h3 className="header ui">Рекламные объявления</h3>
                      <AdvertisementForm 
                          onCreate={(advertisement) => {this.pushAdvertisement(advertisement)}}
                          campaignId={campaign._id} />
                     
                      <div className="divider dot ui"></div>
                      <Advertisements 
                        columns="three"
                        advertisements={advertisements} />
                  </div>
                </div>
              </div>
            </div>
        	</div>
        	<style jsx>{`
            .grid.disabled {
              opacity:0.4;
            }
            .mode {
              text-align:center;
              display:flex;
              align-items:center;
              justify-content:center;
              margin:20px 0px;
            }
            .status {
              max-width:300px;
              color:#666;
              display:flex;
              align-items:center;
              justify-content:space-between;
              width:300px;
            }
            .status .actions {
              display:flex;
              align-items:center;
              justify-content:center;
              margin-left:15px;
            }
            .head {
              display:flex;
              justify-content:space-between;
            }
            .chart {
              margin-left:-50px;
            }
            .basic .range {
              margin-top:25px;
            }
            .statistics .statistic {
            }
            .basic {
              width:100%
            }
        	`}</style>
        </div>
      );
    } else {
      return null
    }
  }
}

function generateDates(number) {
  let dates = [];
  for(var i = 0; i < number; i++) {
    dates.push(moment().subtract(number - i, 'days'))
  }
  return dates;
}

function getData(number) {
  const dates = generateDates(number);
  let result = [];
  for(var i = 0; i < number; i++) {
    result.push({
      name: dateformat(dates[i], "dd/mm"),
      ['Клики']: Math.floor(Math.random() * 10),
      ['Просмотры']: Math.floor(Math.random() * 50),
      ['Закрытия']: Math.floor(Math.random() * 10)
    })
  }
  return result
}


function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(Single)