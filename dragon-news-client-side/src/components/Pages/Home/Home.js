import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
  const allNews = useLoaderData();

  return (
    <>
      {allNews.map((news) => {
        return <NewsCard key={news._id} news={news} />;
      })}
    </>
  );
};

export default Home;
