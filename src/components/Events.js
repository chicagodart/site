import React, { Component } from 'react';

// Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { connect } from 'react-redux';
import { loadPosts } from '../reducers/posts';


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
  }

  componentDidMount() {
    this.props.loadPosts('events');
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

  showCalendarView() {
    if (this.state.showCalendar) {
      const events = this.props.events.map(event => {
        return {
          'title': event.title.rendered,
          'start': new Date(event.acf.start_date),
          'end': new Date(event.acf.end_date)
        }
      })
      return (
        <div id="big-calendar">
          <BigCalendar
            events={events}
            defaultDate={new Date()}
            startAccessor='start'
            endAccessor='end'
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
          {this.renderEvents(this.props.events)}
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
          {this.showCalendarView(this.props.events)}
        </div>
      );
    }
    this.setState({ showCalendar: !this.state.showCalendar, selectedTab: 'events' });
    return (
      <div>
        {this.showCalendarView(this.props.events)}
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
    return (
      <div>

        <div className="max-width-12 mx-auto">
          <div className="clearfix center">
            <a onClick={this.toggleCalendarView}>
              {this.changeSelectedTab(this.selectedTab)}
            </a>
          </div>
          <div className="clearfix">
            <div>
              {this.showCalendarView()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: Object.values(state.posts).filter(post => post.categories.indexOf(11) !== -1)
});
const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Events);
