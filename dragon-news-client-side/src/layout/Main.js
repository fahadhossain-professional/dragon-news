import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';
import LeftSideNav from '../components/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/Shared/RightSideNav/RightSideNav';

const Main = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2 d-none d-sm-block">
            <LeftSideNav />
          </div>
          <div className="col-lg-7">
            <Outlet />
          </div>
          <div className="col-lg-3">
            <RightSideNav />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
