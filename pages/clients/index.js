import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'akp', name: 'Pramod' },
    { id: 'pram', name: 'Krishna' },
  ];
  return (
    <div>
      <h1>The Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
