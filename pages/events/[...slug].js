import { useRouter } from 'next/router';
import ErrorTile from '../../components/ErrorTile';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  let [year, month] = filterData;
  year = parseInt(year, 10);
  month = parseInt(month, 10);
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2022 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <ErrorTile>
        <p>Invalid Filter. Please adjust your values</p>
      </ErrorTile>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorTile>
        <p>Events not found for the given filter</p>
      </ErrorTile>
    );
  }
  return (
    <div>
      <EventList items={filteredEvents} title='Filtered Events' />
    </div>
  );
};

export default FilteredEventsPage;
