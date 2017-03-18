import React, { Component } from 'react';

//components
import Sidebar from './Sidebar';
import SingleEvent from './SingleEvent';


class Events extends Component {
  constructor(props) {
    super(props);

    // this.renderUpcomingEvents = this.renderUpcomingEvents.bind(this);
    //dummy data
    this.events = [
      {
        title: 'Uncle Vanya',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'March 12th - March 30th',
        reviews: ['good', 'great', 'awesome']
      },
      {
        title: 'The Seagull',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'April 12th - April 30th',
        reviews: ['good', 'great', 'awesome']
      },
      {
        title: 'Our Town',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'May 12th - May 30th',
        reviews: ['good', 'great', 'awesome']
      }
    ]
  }

  // renderUpcomingEvents() {
  //   this.events && this.events.map((event, i) => {
  //     return (
  //       <div key={i}>
  //         <h2>{event.title}</h2>
  //         <img src={event.img} alt={event.desc}/>
  //         <h3>{event.dateRange}</h3>
  //         {event.reviews.map((review, i) => {
  //           return <h4 key={i}>{review}</h4>
  //         })}
  //       </div>
  //     )
  //   })
  // }

  render(){
    return(
      <div>

        <div>
          <div>
            <h1>Hero Img</h1>
          </div>

          <div>
            <h1>Upcoming Events</h1>
          </div>

          {
            this.events && this.events.map((event, i) => {
              return (
                <div key={i}>
                  <h2>{event.title}</h2>
                  <img src={event.img} alt={event.desc}/>
                  <h3>{event.dateRange}</h3>
                  {event.reviews.map((review, i) => {
                    return <h4 key={i}>{review}</h4>
                  })}
                </div>
              )
            })
          }

          <Sidebar/>

        </div>

      </div>
    )
  }
}

export default Events;