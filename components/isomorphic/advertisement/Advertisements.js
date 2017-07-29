import React from 'react';
import dateformat from 'dateformat'

import Link from 'next/link'
import Advertisement from './Advertisement.js'
import AdvertisementForm from './AdvertisementForm.js'

export default class Advertisements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isCreating: false
    }
  }

  renderAdvertisements(advertisements, columns) {
    return advertisements.map((adv, i) => {
      return <Advertisement columns={columns} advertisement={adv} key={i} />
    })
  }

  render() {
    const { advertisements, columns } = this.props
    const { isCreating } = this.state
    return (
      <div className="ui cards">
      	{this.renderAdvertisements(advertisements, columns)}
      	<style jsx>{`
					.create .image {
						background:#eee;
						display:flex;
						align-items:center;
						justify-content:center;
						min-height:250px;
					}
					.create .image i {
						font-size:30px;
						opacity:.4;
						transition:0.2s all ease;
					}
					.create .image:hover i {
						opacity:1;
					}
      	`}</style>
      </div>
    );
  }
}


