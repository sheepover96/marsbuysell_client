import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <>
      <h1>購入ありがとうございました。</h1>
      pdfを挿入
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Thanks;
