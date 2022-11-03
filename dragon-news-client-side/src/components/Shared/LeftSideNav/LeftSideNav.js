import { useEffect, useState } from 'react';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news-categories')
      .then((res) => { return res.json(); })
      .then((data) => { return setCategories(data); });
  }, []);

  return (
    <div>
      <h2>
        All Category
        {' '}
        {categories.length}
      </h2>
    </div>
  );
};

export default LeftSideNav;
