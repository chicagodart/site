import React, { Component } from 'react';

// Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// Components
import Sidebar from './Sidebar';
import SingleEvent from './SingleEvent';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false,
      selectedTab: 'events'
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.showCalendarView = this.showCalendarView.bind(this);
    this.toggleCalendarView = this.toggleCalendarView.bind(this);
    this.changeSelectedTab = this.changeSelectedTab.bind(this);

    // dummy data
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
    ];

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
    ];
  }

  // calendar event style
  eventStyleGetter(event, start, end, isSelected) {
    const backgroundColor = `#${event.hexColor}`;
    const style = {
      backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style
    };
  }

  renderEvents(events) {
    return events && events.map((event, i) => (
      <div key={i} className="event col col-6 p2">
        <img src={event.img} alt={event.desc} style={{ width: '100%' }} />
        <h2>{event.title}</h2>
        <h3>{event.dateRange}</h3>

        {
            event.reviews && event.reviews.map((review, i) => <h4 key={i}>{review}</h4>)
          }
      </div>
      ));
  }

  showCalendarView(events) {
    if (this.state.showCalendar) {
      return (
        <div id="big-calendar">
          <BigCalendar
            events={this.renderEvents(this.events)}
            defaultDate={new Date()}
            defaultView="month"
            views={{ month: true, week: true }}
            eventPropGetter={(this.eventStyleGetter)}
            style={{ height: 800 }}
          />
        </div>
      );
    }
    return (
      <div className="col col-12">

        <h1>Upcoming Events</h1>
        <div className="clearfix">
          {this.renderEvents(this.events)}
        </div>

        <h1>Past Events</h1>
        <div className="clearfix">
          {this.renderEvents(this.pastEvents)}
        </div>

      </div>
    );
  }

  toggleCalendarView() {
    this.setState({ showCalendar: !this.state.showCalendar });

    if (this.selectedTab === 'events' && this.showCalendar === false) {
      this.setState({ showCalendar: !this.state.showCalendar, selectedTab: 'calendar' });
      return (
        <div>
          {this.showCalendarView(this.events)}
        </div>
      );
    }
    this.setState({ showCalendar: !this.state.showCalendar, selectedTab: 'events' });
    return (
      <div>
        {this.showCalendarView(this.events)}
      </div>
    );
  }

  // Clean this up
  changeSelectedTab() {
    if (this.state.selectedTab === 'events' && this.state.showCalendar) {
      return (
        <div className="flex justify-around">
          <h2>Events List</h2>
          <h2>|</h2>
          <h2 className="active-events-view">Calendar View</h2>
        </div>
      );
    }
    return (
      <div className="flex justify-around">
        <h2 className="active-events-view">Events List</h2>
        <h2>|</h2>
        <h2>Calendar View</h2>
      </div>
    );
  }

  render() {
    const upcoming = this.renderEvents(this.events);
    const past = this.renderEvents(this.pastEvents);
    return (
      <div>

        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>

        <div className="max-width-12 mx-auto">
          <div className="clearfix center">
            <a onClick={this.toggleCalendarView}>
              {this.changeSelectedTab(this.selectedTab)}
            </a>
          </div>
          <div className="clearfix">
            <div>
              {this.showCalendarView(upcoming)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Events;
