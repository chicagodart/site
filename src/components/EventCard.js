import React from 'react';
import dateFormat from 'dateformat';
import { parse } from 'uri-js';

import EventImage from './EventImage';

const EventCard = ({ event }) => {
  const {
    ticket_url,
    exclude_tickets
  } = event.acf;
  const title = event.title.rendered;
  const link = parse(event.link).path;
  const content = event.excerpt.rendered.replace(/\[&hellip;\]/g, `<a href="${link}">... read more</a>`);

  return (
    <div className="event-card">
      <EventImage
        src={event ? event.acf.hero_image.sizes.medium_large : ''}
        alt={event ? event.acf.hero_image.alt : ''}
        align={event ? event.acf.hero_image_align : ''}
      />
      <div className="event-card-text">
        <h2><a href={link} dangerouslySetInnerHTML={{ __html: title }} /></h2>
        {getDate(event)}
        <p dangerouslySetInnerHTML={{ __html: content }} />
        { !exclude_tickets && ticket_url &&
          <div className="event-card__ticket-btn">
            <a href={ticket_url} className="btn">Buy Tickets</a>
          </div>
        }
      </div>
    </div>
  );
};

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
  if (!event.acf.start_date || !event.acf.end_date) return null;
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
