import React, { Component } from 'react';

const ItemCard = (props) => (
	<li>{props.order.quantity} x - {props.order.name}</li>
);

export default ItemCard;