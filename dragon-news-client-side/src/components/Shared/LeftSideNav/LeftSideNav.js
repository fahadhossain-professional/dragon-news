import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news-categories')
      .then((res) => { return res.json(); })
      .then((data) => { return setCategories(data); });
  }, []);

  return (
    <div>
      <ul className="list-group">
        {categories.map(
          (category) => {
            return (
              <li className="list-group-item" key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default LeftSideNav;
