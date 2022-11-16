import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  const loadProjecthandler = () => {
    // load data...
    router.push('/clients/akp/projecta');
  };
  return (
    <div>
      <h1>Client projects page</h1>
      <button onClick={loadProjecthandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
