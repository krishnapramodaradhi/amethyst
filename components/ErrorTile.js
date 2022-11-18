import Link from 'next/link';

import classes from './ErrorTile.module.css';

const ErrorTile = (props) => {
  return (
    <div className={`center ${classes.error}`}>
      {props.children}
      <Link href='/events'>Show All Events</Link>
    </div>
  );
};

export default ErrorTile;
