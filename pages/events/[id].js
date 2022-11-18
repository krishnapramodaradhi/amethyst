import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

import classes from '../../styles/EventDetail.module.css';

const EventDetailPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.id);
  console.log(event);
  if (!event) {
    return <p>No Event Found!!</p>;
  }
  const month = new Date(event.timestamp).toLocaleString('en-US', {
    month: 'short',
  });
  const day = new Date(event.timestamp).toLocaleString('en-US', {
    day: '2-digit',
  });

  const humanReadableDate = new Date(event.timestamp).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long',
  });

  return (
    <div className={classes.event}>
      <div className={classes.header}>
        <div className={classes.date}>
          <span>{month}</span>
          <span>{day}</span>
        </div>
        <div className={classes.title}>
          <h1>{event.title}</h1>
          <small> Starts on {humanReadableDate}</small>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.image}>
          <img src={`/${event.image}`} alt={event.title} />
        </div>
        <div className={classes['event-details']}>
          <h2>Event Details</h2>
          <div className={classes['event-info']}>
            <div>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h5>Location</h5>
              <p>{event.location}</p>
            </div>
          </div>

          <div className={classes['event-info']}>
            <div>
              <FaCalendarAlt />
            </div>
            <div>
              <h5>Date and Time</h5>
              <p>{humanReadableDate}</p>
            </div>
          </div>
          <div className={classes['event-info']}>
            <div>
              <FaDollarSign />
            </div>
            <div>
              <h5>Price</h5>
              <p>${event.price}</p>
            </div>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Book Now</button>
            <button className='btn accent'>Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <h2>About this event</h2>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetailPage;
