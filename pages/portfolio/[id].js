import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname, router.query);
  return (
    <div>
      <h1>Single Portfolio: {router.pathname}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
