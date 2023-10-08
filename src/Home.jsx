import { Link } from "react-router-dom";
import { MARS_LAND_LIST } from "./utils/constant";
import { css } from '@emotion/css'
import Mars from "./static/mars.png"

const Home = () => {
  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }>
      <h1>Mars Land Buy&Sell</h1>
      <div>
        <img src={Mars} alt="" width="800px" height="800px" />
      </div>
      <div>地図を挿入</div>
      <div>
        {
          Object.keys(MARS_LAND_LIST).map( land_id => {
            let land = MARS_LAND_LIST[land_id];
            return (
              <div key={land_id}>
                <div>
                  {land.name}
                </div>
                <div>
                  {land.price}
                </div>
              </div>
            )
          }
          )
        }
      </div>
      <div>
        購入は<Link to={`/purchase/`}>こちら（想定では地図上の土地をクリックで遷移）</Link>
      </div>
    </div>
  );
};

export default Home;
