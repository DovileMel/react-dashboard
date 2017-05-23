import React, { Component } from 'react';
import UserCard from './UserCard';
import './style.css';

const orders = [
  {
    user_id: "4928372984289",
    first_name: "Bob",
    last_name: "Smith",
    profile_pic: "https://pbs.twimg.com/profile_images/603186128498352129/JDjHgMqy.jpg",
    state: "current user state",
    order_number: "1425",
    order_total: "3.99",
    order: [
      {
        id: 1,
        name: "Turkey sandwich",
        quantity: 5,
        price: 0.99,
        image: "image url"
      },
      {
        id: 2,
        name: "Cola",
        quantity: 5,
        price: 0.99,
        image: "image url"
      },
      {
        id: 3,
        name: "Sprite",
        quantity: 5,
        price: 0.99,
        image: "image url"
      }
    ]
  },
  {  
     "user_id":"1624265997585496",
     "first_name":"Vladislav",
     "last_name":"Achramovic",
     "profile_pic":"https://scontent.xx.fbcdn.net/v/t1.0-1/13418961_277642839256124_4506559117913217746_n.jpg?oh=adf87ef60bc88fae73ddd6588621515a&oe=59A95372",
     "state":"ordered",
     "order_number":"2966",
     "order":[  
        {  
           "id":1,
           "name":"Turkey Sandwich",
           "quantity":1,
           "price":2.99,
           "image":"https://images-gmi-pmc.edge-generalmills.com/8825e2f8-8fab-41e9-ae0f-5b8c81363702.jpg"
        },
        {  
           "id":11,
           "name":"Fanta",
           "quantity":2,
           "price":1.99,
           "image":"https://www.coca-cola.com.my/wp-content/uploads/sites/68/2015/04/fanta-orange-1.5L.jpg"
        }
     ],
     "order_total":6.97
  }
]

class CardsContaier extends Component {
  render() {
    return (

      <div className="OrderContainer">
              {orders.map( (order, index) => 
          <UserCard key={index} order={order} />
        )};
      </div>
    );
  }
}

export default CardsContaier;
