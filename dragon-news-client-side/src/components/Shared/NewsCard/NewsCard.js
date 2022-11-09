/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { BsFillSaveFill } from 'react-icons/bs';
import { FaEye, FaShareSquare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  const {
    title, rating, total_view, image_url, details, author, _id
  } = news;

  return (
    <div className="card text-center mb-4">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="auth-info d-flex align-items-center">
            <img src={author.img} className="m-1" alt="" />
            <div className="mx-2">
              <span className="d-block d-flex justify-content-start fw-bold">{author.name}</span>
              <span className="d-block d-flex justify-content-start">{author.published_date}</span>
            </div>
          </div>
          <div>
            <span className="px-1"><BsFillSaveFill /></span>
            <span className="px-1"><FaShareSquare /></span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img src={image_url} className="card-img" alt="" />
        {details.length > 250 ? (
          <p className="card-text">
            {`${details.slice(0, 250)}...`}
            <Link to={`/news/${_id}`}>More</Link>
          </p>
        ) : <p className="card-text">{details}</p>}
      </div>
      <div className="card-footer text-muted d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FaStar className="text-warning" />
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
