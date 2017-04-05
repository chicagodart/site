import React from 'react';
import dateFormat from 'dateformat';
import { resolve, parse } from 'uri-js';

import { apiDomain } from '../../.config.json';
const root = apiDomain || '/';

const EventCard = ({ event }) => {
  const title = event.title.rendered;
  const heroImage = event.acf.hero_image;
  const link = parse(event.link).path;
  const content = event.excerpt.rendered.replace(/\[&hellip;\]/g, `<a href="${link}">... read more</a>`);

  return (
    <div className="event-card">
      <img src={resolve(root, heroImage.sizes.medium_large)} alt={heroImage.alt} style={{ width: '100%' }} />
      <div className="event-card-text">
        <h2><a href={link} dangerouslySetInnerHTML={{ __html: title }} /></h2>
        {getDate(event)}
        <p dangerouslySetInnerHTML={{ __html: content }} />
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
