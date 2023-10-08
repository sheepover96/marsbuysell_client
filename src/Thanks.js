import { Link } from "react-router-dom";
import './styles.css';
import Mars4 from "./static/syoumeisyo.jpg"

const Thanks = () => {
  return (
    <>
      <h1>購入ありがとうございました。</h1>
      <img src={Mars4} alt="" width="800px" height="1000px" />
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Thanks;
