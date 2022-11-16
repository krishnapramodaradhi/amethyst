import { useRouter } from 'next/router';

const SelectedClientProjectsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The {router.query.projectId} Project Page</h1>
    </div>
  );
};

export default SelectedClientProjectsPage;
