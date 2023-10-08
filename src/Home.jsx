import { Link } from "react-router-dom";
import { MARS_LAND_LIST } from "./utils/constant";
import { css } from '@emotion/css'
import './styles.css';
import Mars from "./static/mars.png"
import Title from "./static/title.png"

const Home = () => {
  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }>
      <img src={Title} alt="" width="600px" />
      <div style={{
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 100,
          left: 400,
          background: 'rgba(0, 0, 0, 0.1)',
          zIndex: '0',
        }}>
          <Link to={`/purchase/${1}`}>ヴァスティタス・ボレアリス</Link>
        </div>
        <img src={Mars} alt="" width="800px" height="800px" />
      </div>
    </div>
  );
};

export default Home;
