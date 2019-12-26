import React, { Component } from 'react'
import PromiseImg from './promise_bg.jpg'
import myImage from './images/promise_bg.jpg'

var divStyle = {
	backgroundImage: `url(${PromiseImg})`
}

class Home extends Component{
	render(){
		return(
			<section className="promise_sec" style={divStyle}>
				<div className="container">
					<img src="{myImage}"/>
					<img src={process.env.PUBLIC_URL + '/images/promise_bg.jpg'} /> 
					<p><strong>We promise</strong> to always provide value and outstanding service and to deliver<br /> your car to you looking just as it did pre-accident as fast and efficiently as possible.</p>
					<div className="row">
						<div className="col-md-4">
							<h3>RELIABILTY</h3>
							<p>At Straightline Collision we know your vehicle and your time is important; which is why your car is always the first priority and is handled with the utmost care. </p>
						</div>
						<div className="col-md-4">
							<h3>TRUST</h3>
							<p>We know an accident can be frustrating and stressful and the last thing you need to be thinking about is being able to trust the people handling your repairs. </p>
						</div>
						<div className="col-md-4">
							<h3>EXPERIENCE</h3>
							<p>Straightline Collision is a well known family owned auto body shop and has been operating and expanding over the last 20 years.</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Home