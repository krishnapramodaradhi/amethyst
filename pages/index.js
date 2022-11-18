import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';
import { FaArrowRight } from 'react-icons/fa';

import classes from '../styles/Home.module.css';
import Link from 'next/link';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={classes.container}>
      <section className={classes.hero}>
        <h1>
          The Easiest and Most Powerful Online Event Booking and Ticketing
          System
        </h1>
        <p>
          Amethyst is an all-in-one event ticketing platform for event
          organisers, promoters, and managers. Easily create, promote and manage
          your events of any type and size.
        </p>
        <Link href='/events' className={classes.action}>
          <span>Explore Now</span>
          <FaArrowRight />
        </Link>
      </section>
      <EventList items={featuredEvents} title='Featured Events' />
    </div>
  );
};

export default HomePage;
