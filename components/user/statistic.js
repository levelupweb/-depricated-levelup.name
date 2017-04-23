import React from 'react';

export default class Statistic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="ui statistics">
		  <div className="statistic">
		    <div className="value">
		      254
		    </div>
		    <div className="label">
		      нрав.
		    </div>
		  </div>
		  <div className="statistic">
		    <div className="value">
		      22
		    </div>
		    <div className="label">
		      подп.
		    </div>
		  </div>
		  <div className="statistic">
		    <div className="value">
		      2
		    </div>
		    <div className="label">
		      публ.
		    </div>
		  </div>
		  <div className="statistic link">
		    <div className="value">
		      <a href="#"><i className="fa fa-cog rounded ui image"></i></a>
		    </div>
		  </div>
		</div>
		<style jsx>{`
			.statistics .statistic {
				margin:0px 20px;
			}

			.statistics .statistic .value {
				font-size:21px!important;
				color:rgba(0,0,0,0.3);
			}

			.statistics .statistic.link {
				margin-top:auto;
				margin-bottom:auto;
			}

			.statistics .statistic.link .value .fa {
				color:rgba(0,0,0,0.5);
				border:1px solid #eee;
				background:#eee;
				padding:5px;
			}

			.statistics .statistic .label {
				text-transform:lowercase;
				font-size:13px;
				font-weight:100;
				color:rgba(0,0,0,0.2);
			}
		`}</style>
      </div>
    );
  }
}
