import EventItem from './event-item';

import classes from './event-list.module.css';

const EventList = (props) => {
  return (
    <div>
      <h2 className={classes.featured}>{props.title}</h2>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.timestamp}
            image={item.image}
            price={item.price}
            duration={item.duration}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
