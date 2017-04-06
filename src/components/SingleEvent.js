import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../reducers/posts';

import { getEventDisplayDate } from './EventCard';

function SingleEvent(props) {
  const post = props.page;
  const {
      cast,
      exclude_cast_field,
      ticket_url,
      exclude_tickets
    } = post.acf;
  const displayDate = getEventDisplayDate(post);
  return (
    <section className="single-event" >

      <hgroup>

        { !exclude_tickets && ticket_url &&
        <div className="single-event__ticket-btn">
          <a href={ticket_url} className="btn btn--large">Buy Tickets</a>
        </div>
          }
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div className="single-event__date">{displayDate}</div>
      </hgroup>

      <div className="single-event__section" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

      { !exclude_cast_field && !!cast &&
      <div className="single-event__section center">
        <h3>Cast & Artists</h3>
        <div dangerouslySetInnerHTML={{ __html: cast }} />
      </div>
        }

    </section>
  );
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = { loadPost };

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
