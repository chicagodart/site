import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { loadPosts } from '../reducers/posts';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component {
  componentDidMount() {
    this.props.loadPosts('events');
  }

  render() {
    const events = this.props.events.map(event => ({
      title: event.title.rendered,
      start: new Date(event.acf.start_date),
      end: new Date(event.acf.end_date)
    }));
    return (
      <div id="big-calendar">
        <BigCalendar
          ref={(el) => { this.cal = el; }}
          events={events}
          startAccessor="start"
          views={{ month: true, week: true }}
          endAccessor="end"
          defaultView="month"
          style={{ height: 800 }}
        />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  events: Object.keys(state.posts).map(key => state.posts[key]).filter(post => post.categories.indexOf(11) !== -1);
});
const mapDispatchtoProps = { loadPosts };

export default connect(mapStateToProps, mapDispatchtoProps)(Calendar);
