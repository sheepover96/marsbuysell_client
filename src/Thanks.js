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
          <button onClick={handleDownload}>画像をダウンロード</button>
        </div>
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </div>
    </>
  );
};

export default Thanks;
