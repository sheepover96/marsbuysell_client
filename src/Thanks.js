import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import './styles.css';
import Title from "./static/title.png"
import Mars4 from "./static/syoumeisyo.jpg"

const Thanks = () => {
  // コンポーネントがマウントされた後にページのトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Mars4; // ダウンロードしたい画像のパス
    link.download = 'syoumeisyo.jpg'; // ダウンロード時のファイル名
    link.click();
  };

  return (
    <>
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
        </div>
        <h1>購入ありがとうございました</h1>
        <img src={Mars4} alt="" width="800px" height="1000px" />
        <div style={{
          position: 'relative',
        }}>
        <br />
           <button
    onClick={handleDownload}
    style={{
      backgroundColor: "orange", // ボタンの背景色を設定
      color: 'white', // ボタンの文字色を設定
      border: 'none', // ボーダーを削除
      padding: '10px 20px', // ボタンのパディングを設定
      cursor: 'pointer', // マウスオーバー時にカーソルを変更
    }}
  >証明書のダウンロードはこちら</button>
        </div>
        <br />
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </div>
    </>
  );
};

export default Thanks;
