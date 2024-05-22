import './notfound.scss'
import { Link } from 'react-router-dom';
import lost from '../../assets/lost-zoro.png'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-text">
          <h1>404</h1>
          <p>Sorry, We cannot find the requested page.</p>
          <p>
            <strong>You are lost!</strong>
          </p>
          <Link to="/" className="notfound-home-button">
            Go to home
          </Link>
        </div>
        <div className="notfound-image">
          <img src={lost} alt="Lost Zoro" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
