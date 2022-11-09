import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <>
      {categoryNews.map((news) => {
        return <NewsCard key={news._id} news={news} />;
      })}
    </>
  );
};

export default Category;
