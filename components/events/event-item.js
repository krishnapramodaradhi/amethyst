import Link from 'next/link';
import { FaClock, FaCalendar } from 'react-icons/fa';

import classes from './event-item.module.css';

const EventItem = (props) => {
  const { title, image, date, duration, id, price } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const humanReadableTime = new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
  });

  return (
    <li className={classes.item}>
      <Link href={`/events/${id}`} className={classes.link}>
        <div className={classes.image}>
          <img src={`/${image}`} alt={title} />
        </div>
        <div className={classes.content}>
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        <div className={classes.footer}>
          <div className={classes.calendar}>
            <FaCalendar />
            <div>
              <time className={classes.date}>{humanReadableDate}</time>
              <time className={classes.time}>{humanReadableTime}</time>
            </div>
          </div>
          <div className={classes.duration}>
            <FaClock />
            <span>{duration}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default EventItem;
