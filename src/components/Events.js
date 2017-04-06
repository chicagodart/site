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
      selectedTab: 'events',
      currentPage: 1,
      eventsPerPage: 4
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.showCalendarView = this.showCalendarView.bind(this);
    this.toggleCalendarView = this.toggleCalendarView.bind(this);
    this.changeSelectedTab = this.changeSelectedTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  componentDidMount() {
    this.props.loadPosts('events');
    console.log('this.cal', this.cal);
  }

  addActiveClass(num) {
    console.log(num === this.state.currentPage);
    return num === this.state.currentPage ? 'active' : '';
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
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

    const { currentPage, eventsPerPage } = this.state;
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentPageEvents = eventsOrdered.slice(indexOfFirstEvent, indexOfLastEvent);
    return currentPageEvents.map((event, i) => (
      <div key={i} className="event col col-6 p2">
        <EventCard event={event} />
      </div>
      ));
  }

  renderPageNumbers() {
    const pageNumbers = [];
    const numOfEvents = Object.keys(this.props.events).length;
    const numOfPages = Math.ceil(numOfEvents / this.state.eventsPerPage);
    for (let i = 1; i <= numOfPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.length === 1 ? null : pageNumbers.map(number => (
      <li key={number}>
        <button id={number} className={this.addActiveClass(number)} onClick={this.handleClick}>
          {number}
        </button>
      </li>
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
        <div ref={(el) => { this.cal = el; }} id="big-calendar" >
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
        <ul className="pagination-container">
          {this.renderPageNumbers()}
        </ul>
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
        <div className="clearfix center" style={{ marginBottom: '2em' }}>
          <h2 className="page-title">Upcoming Events</h2>
          <button className="btn" onClick={this.toggleCalendarView}>{this.state.showCalendar ? 'List View' : 'Calendar View'}</button>
          {/* <div className="event-calendar-toggle">{this.changeSelectedTab(this.selectedTab)}</div> */}
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
