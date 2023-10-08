import { Link } from "react-router-dom";
import './styles.css';
import Mars4 from "./static/mars4.png"

const Thanks = () => {
  return (
    <>
      <h1>購入ありがとうございました。</h1>
      pdfを挿入
      <img src={Mars4} alt="" width="800px" height="800px" />
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Thanks;
