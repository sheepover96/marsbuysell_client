import { Link } from "react-router-dom";

const Purchase = () => {
  return (
    <>
      <h1>購入画面</h1>
      <h2>購入する土地（1件ずつ？orまとめて購入？⇒カート機能）</h2>
      <table border={1}>
        <tr><td>1</td><td>いしのまき-い</td><td className="price">10,000</td></tr>
      </table>
      <h2>注文者情報の入力</h2>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Purchase;