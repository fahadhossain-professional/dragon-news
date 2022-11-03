import {
  FaFacebook,
  FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp
} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary mb-2 w-100">
        <FaGoogle />
        {' '}
        Sign in with Google
      </button>
      <button type="button" className="btn btn-outline-dark mb-2 w-100">
        <FaGithub />
        {' '}
        Sign in with Github
      </button>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ul className="list-group">
          <li className="list-group-item mb-2">
            <FaFacebook />
            {' '}
            Facebook
          </li>
          <li className="list-group-item mb-2">
            <FaInstagram />
            {' '}
            Instagram
          </li>
          <li className="list-group-item mb-2">
            <FaTwitter />
            {' '}
            Twitter
          </li>
          <li className="list-group-item mb-2">
            <FaWhatsapp />
            {' '}
            Whatsapp
          </li>
          <li className="list-group-item mb-2">
            <FaTwitch />
            {' '}
            Twitch
          </li>
        </ul>
      </div>
      <BrandCarousel />
    </div>
  );
};

export default RightSideNav;
