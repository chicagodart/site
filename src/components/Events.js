import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import Sidebar from './Sidebar';
import SingleEvent from './SingleEvent';

class Events extends Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
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

    this.pastEvents = [
      {
        title: 'Hamlet',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'November 12th - November 30th',
        reviews: ['good', 'great', 'awesome']
      },
      {
        title: 'Fences',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'December 12th - December 30th',
        reviews: ['good', 'great', 'awesome']
      },
      {
        title: 'Chicago',
        img: 'http://lorempixel.com/400/200',
        desc: 'alt text desc',
        dateRange: 'October 12th - October 30th',
        reviews: ['good', 'great', 'awesome']
      }
    ]
  }

  renderEvents(events) {
    return events.map((event, i) => {
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

  render(){
    const upcoming = this.renderEvents(this.events);
    const past = this.renderEvents(this.pastEvents);
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
            upcoming
          }

          <div>
            <h1>Past Events</h1>
          </div>

          {
            past
          }

          <Sidebar />

        </div>

      </div>
    )
  }
}

export default Events;
