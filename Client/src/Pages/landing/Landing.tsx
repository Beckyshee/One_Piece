
import Navbar from "../../components/Navbar";
import zoro from '../../assets/zoro1.jpg'
import ace from '../../assets/portgas.jpg'
import shanks from '../../assets/shanks1.jpg'
import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="landing-content">
        <h1 className="title">Anime One Piece!!</h1>
        <p className="description">
          The story follows the adventures of Monkey D. Luffy and his crew, the
          Straw Hat Pirates, where he explores the Grand Line in search of the
          mythical treasure...
        </p>
        <button className="watch-button">Watch now</button>
        <div className="rating-genre">
          <div className="rating">
            <span>Rating:</span> ⭐⭐⭐⭐⭐
          </div>
          <div className="genre">
            <span>Genre:</span> Shonen manga, Action manga, Comedy, Fantasy
          </div>
        </div>
        <div className="thumbnails">
          <img src={zoro} alt="Thumbnail 1" />
          <img src={ace} alt="Thumbnail 2" />
          <img src={shanks} alt="Thumbnail 3" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
