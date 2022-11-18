const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'A New Way of Life',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 100,
    timestamp: 1668769401901,
    duration: '1h',
    image: 'images/guns.jpg',
    location: '1880 Scenic Way, Dana, IL, 47847',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Earrings workshop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 150,
    timestamp: 1669791627000,
    duration: '2h',
    image: 'images/earrings.jpg',
    location: '1937 Waterview Lane, Santa Fe, NM, 87501',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: 'Shutter Life',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 500,
    timestamp: 1671105633000,
    duration: '2.5h',
    image: 'images/camera.jpg',
    location: '3735 Eagles Nest Drive, Chico, CA, 95926',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Step Up open Mic Show',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 1000,
    timestamp: 1671820200000,
    duration: '1h',
    image: 'images/mic.jpg',
    location: '3661 Hinkle Lake Road, Roxbury, MA, 02119',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Trainee Program on leadership',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 1500,
    timestamp: 1671105633000,
    duration: '3h',
    image: 'images/program.jpg',
    location: '1718 Amethyst Drive, Lansing, MI, 48933',
    isFeatured: true,
  },
  {
    id: 'e6',
    title: 'Canvas Painting for Beginners',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 700,
    timestamp: 1668861000000,
    duration: '1h',
    image: 'images/painting.jpg',
    location: '2187 Pinnickinick Street, Washougal, WA, 98671',
    isFeatured: true,
  },
  {
    id: 'e7',
    title: 'Spring Showcase Saturday',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias corporis nobis dicta voluptas cum cupiditate atque cumque tempora ex non excepturi asperiores commodi, deserunt neque natus similique rerum! Est, animi quo? Itaque, commodi alias corrupti minima minus laborum culpa pariatur maxime facere voluptatum omnis facilis cum autem natus ab sapiente. Fuga quod consequatur laudantium praesentium saepe numquam soluta totam earum aspernatur labore, rem quam quis velit magni ut accusantium neque unde eum. Velit harum molestias blanditiis? Laboriosam numquam dolorem, delectus architecto consectetur, eaque unde quibusdam nihil quos non fuga, maiores animi esse iusto libero rerum tempora temporibus aspernatur reiciendis harum ipsa? Iure tenetur totam doloribus error ea eius dicta ullam asperiores voluptas hic optio fuga minima temporibus, consequatur culpa distinctio odit dolorem, quam dignissimos labore sequi accusamus! Deserunt iusto facere sunt quaerat architecto et officiis tempora sequi aspernatur consequatur numquam natus debitis earum ducimus vitae dolores atque, perspiciatis doloremque. Natus architecto quisquam eveniet est accusantium autem. Quidem, voluptas repudiandae sequi ducimus laboriosam ex vel. Laudantium eius repellat totam illo omnis perferendis necessitatibus ad alias quae, rerum enim, hic ex sint reprehenderit, quis eaque! Nostrum aliquid iusto libero consectetur sint earum perspiciatis doloremque rerum eveniet, nesciunt error, quis sapiente unde tempore explicabo id iure, ea totam nulla provident. Soluta architecto inventore quam ab repudiandae quidem assumenda expedita, iusto et asperiores, consectetur, porro quas nobis facilis amet quae. Dolor corrupti officiis alias odio debitis ullam facilis ipsam error aperiam, eos molestias nulla vero delectus minima eum veritatis similique iusto sit nesciunt.',
    price: 2000,
    timestamp: 1672576200000,
    duration: '3h',
    image: 'images/dance.jpg',
    location: '1802 Front Street, Southfield, CO, 80202',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.timestamp);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
