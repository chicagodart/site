import React from 'react';
import dateFormat from 'dateformat';
import { resolve, parse } from 'uri-js';

import { apiDomain } from '../../.config.json';
const root = apiDomain || '/';

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={resolve(root, event.acf.hero_image.sizes.medium_large)} alt={event.acf.hero_image.alt} style={{ width: '100%' }} />
    <div className="event-card-text">
      <h2><a href={parse(event.link).path} dangerouslySetInnerHTML={{ __html: event.title.rendered }} /></h2>
      {getDate(event)}
      <p dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }} />
      {!!event.reviews && event.reviews.map((review, i) => <h4 key={i}>{review}</h4>)}
    </div>
  </div>
);

const getDate = (event) => {
  if (event.acf.start_date) {
    return (
      <div>
        <h3>{getEventDisplayDate(event)}</h3>
        <h4>{getEventDisplayTime(event)}</h4>
      </div>
    );
  }
  return <h3>{dateFormat(event.date, 'mmmm dS, yyyy')}</h3>;
};

export const getEventDisplayDate = (event) => {
  const startDate = new Date(event.acf.start_date);
  const endDate = new Date(event.acf.end_date);

  // Return one date and a time range
  if (startDate.toDateString() === endDate.toDateString()) {
    return dateFormat(startDate, 'mmmm dS, yyyy');
  }
  // Return a date range and no times
  if (startDate.getYear() !== endDate.getYear()) {
    return `${dateFormat(startDate, 'mmmm dS, yyyy')}-${dateFormat(endDate, 'mmmm dS, yyyy')}`;
  } else if (startDate.getMonth() !== endDate.getMonth()) {
    return `${dateFormat(startDate, 'mmmm dS')}-${dateFormat(endDate, 'mmmm dS')}, ${dateFormat(endDate, 'yyyy')}`;
  }
  return `${dateFormat(startDate, 'mmmm dS')}-${dateFormat(endDate, 'dS')}, ${dateFormat(endDate, 'yyyy')}`;
};

const getEventDisplayTime = (event) => {
  const startDate = new Date(event.acf.start_date);
  const endDate = new Date(event.acf.end_date);
  if (startDate.toDateString() === endDate.toDateString()) {
    const startTime = dateFormat(startDate, 'h:MM tt');
    const endTime = dateFormat(endDate, 'h:MM tt');
    return `${startTime}-${endTime} `;
  }
  return null;
};

export default EventCard;
