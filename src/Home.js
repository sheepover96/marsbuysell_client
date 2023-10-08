import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      地図を挿入
      <div>
        購入は<Link to={`/purchase/`}>こちら（想定では地図上の土地をクリックで遷移）</Link>
      </div>
    </>
  );
};

export default Home;
