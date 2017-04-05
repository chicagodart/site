import React, { Component } from 'react';
import { resolve, parse } from 'uri-js';
// Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import _ from 'lodash';

import { connect } from 'react-redux';
import { loadPosts } from '../reducers/posts';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// Components
import EventCard from './EventCard';

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
    const eventsOrdered = _.orderBy(events, [event => event.acf.end_date], ['desc']);
    return eventsOrdered.map((event, i) => (
      <div key={i} className="event col col-6 p2">
        <EventCard event={event} />
      </div>
      ));
  }

  unescapeHTML(str) { // modified from underscore.string and string.js
    return str.replace(/\&([^;]+);/g, (entity, entityCode) => {
      let match;
      const escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };

      if (entityCode in escapeChars) {
        return escapeChars[entityCode];
      } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
        return String.fromCharCode(parseInt(match[1], 16));
      } else if (match = entityCode.match(/^#(\d+)$/)) {
        return String.fromCharCode(~~match[1]);
      }
      return entity;
    });
  }

  showCalendarView() {
    if (this.state.showCalendar) {
      const events = this.props.events.map(event => ({
        title: this.unescapeHTML(event.title.rendered),
        start: new Date(event.acf.start_date),
        end: new Date(event.acf.end_date),
        link: event.link
      }));
      return (
        <div id="big-calendar">
          <BigCalendar
            events={events}
            selectable
            onSelectEvent={event => window.location.assign(`${parse(event.link).path}`)}
            defaultDate={new Date()}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            views={{ month: true, week: true }}
            eventPropGetter={this.eventStyleGetter}
            style={{ height: 800 }}
          />
        </div>
      );
    }
    return (
      <div className="col col-12">
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
          <button className="event-calendar-toggle-button" onClick={this.toggleCalendarView}><span>Events List</span></button>
          <span>|</span>
          <button className="event-calendar-toggle-button" onClick={this.toggleCalendarView}><span className="active-events-view">Calendar View</span></button>
        </div>
      );
    }
    return (
      <div className="flex justify-around">
        <button className="event-calendar-toggle-button" onClick={this.toggleCalendarView}><span className="active-events-view">Events List</span></button>
        <span>|</span>
        <button className="event-calendar-toggle-button" onClick={this.toggleCalendarView}><span> Calendar View</span></button>
      </div>
    );
  }

  render() {
    return (
      <div className="max-width-12 mx-auto">
        <div className="clearfix center">
          <h2 className="page-title">Upcoming Events</h2>
          <div className="event-calendar-toggle">{this.changeSelectedTab(this.selectedTab)}</div>
        </div>
        <div className="clearfix">
          {this.showCalendarView()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: Object.values(state.posts).filter(post => post.categories.indexOf(11) !== -1)
});
const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Events);
