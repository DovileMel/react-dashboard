import React, { Component } from 'react';
import ItemCard from './ItemCard';

class UserCard extends Component {

	constructor() {
		super();
		this.state = {
			isAccepted: false,
			isCompleted: false,
			isCanceled: false
		};

		this.acceptHandler = this.acceptHandler.bind(this);
		this.completeHandler = this.completeHandler.bind(this);
		this.cancelHandler = this.cancelHandler.bind(this);
	}

	acceptHandler() {
		this.setState({
			isAccepted: true
		})
	}

	completeHandler() {
		this.setState({
			isCompleted: true
		})
	}

	cancelHandler() {
		this.setState({
			isCanceled: true
		})
	}

	render() {
		if (!this.state.isCanceled) {
			return (
				<section
			      	className={`col col-lg-6 col-sm-6 ${this.state.isCompleted ? 'bottom' : ''}`}
			  		>
					<ul className="box">
						<li>
						    <div className="row">
						        <div className='col col-xs-5 image'>
						              <img alt="cry cry" src={this.props.order.profile_pic} className='img-rounded' />
						        </div>
						        <div className='col col-xs-7 order'>
						            <b>{this.props.order.first_name} {this.props.order.last_name}</b><br/>
						            <span className="grey"><b>$ {this.props.order.order_total}</b></span>
						        </div>
						    </div>
						    <div className="row">
						       <div className='col col-xs-12'>
						            <span className="grey">{this.props.order.order_number}</span><br/>
						            order number
						        </div>
						    </div>

						    <div className="row">
						        <div className='col col-xs-12'>
						          <span className="grey">Order</span>
						            <ul className="blue">
						            	{this.props.order.order.map( (good, index) =>
						            		<ItemCard key={index} order={good} />
					            		)}
						            </ul>
						        </div>
						    </div>

						    <div className="row options">                  
						  		<div className='col col-xs-6' >
									{!this.state.isAccepted && <button type="button" className="btn" onClick={this.acceptHandler}>Accept</button>}
									{this.state.isAccepted && <button disabled={this.state.isCompleted} type="button" className="btn" onClick={this.completeHandler}>Complete</button>}
								</div>
						  		<div className='col col-xs-6'>
						      		<button
						      			type="button"
					      				className="btn cancelButton"
					      				disabled={this.state.isCompleted}
					      				onClick={this.cancelHandler}
				      				>Cancel</button>
						  		</div>
						  	</div>
						</li>
					</ul>
			      </section>
			);
		}

		return null;
	}
}

export default UserCard;
