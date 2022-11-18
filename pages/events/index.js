import { useRouter } from 'next/router';
import { useRef } from 'react';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

import classes from '../../styles/Events.module.css';

const AllEventsPage = () => {
  const yearRef = useRef();
  const monthRef = useRef();
  const router = useRouter();
  const events = getAllEvents();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/events/${yearRef.current.value}/${monthRef.current.value}`);
  };

  return (
    <div className={classes.container}>
      <section className={classes.filter}>
        <h1>Discover Events For All The Things You Love</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <select id='year' ref={yearRef}>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
              </select>
            </div>
            <div className={classes.control}>
              <select id='month' ref={monthRef}>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
            </div>
            <div>
              <button className='btn'>Find</button>
            </div>
          </div>
        </form>
      </section>
      <EventList items={events} title='All Events' />
    </div>
  );
};

export default AllEventsPage;
