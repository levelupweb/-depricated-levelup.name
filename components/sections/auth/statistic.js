import React from 'react';

export default class Statistic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<div className="statistic-wrapper">
          <h2 className="ui header">
             <i className="fa fa-star-o"></i><small>Статистика</small>
          </h2>
      	  <div className="ui mini statistic horizontal ">
            <div className="value">
              2,204
            </div>
            <div className="label">
              авторов
            </div>
          </div>
          <div className="ui mini statistic horizontal ">
            <div className="value">
              263
            </div>
            <div className="label">
              публикации
            </div>
          </div>
          <div className="ui mini statistic horizontal ">
            <div className="value">
              29,689
            </div>
            <div className="label">
              лайков
            </div>
          </div>
          <style jsx>{`
            .ui.statistic {
              margin:10px 0px!important;
            }
          `}</style>
    		</div>
    );
  }
}
