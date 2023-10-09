import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { MARS_LAND_LIST } from "./utils/constant";
import { css } from '@emotion/css'
import './styles.css';
import Mars from "./static/mars.png"
import Title from "./static/title.png"


const Home = () => {
  // コンポーネントがマウントされた後にページのトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // ボタンの状態を管理するためのstateを設定
  const [triangleDirection, setTriangleDirection] = useState('right');
  // ボタンがクリックされたときの処理
  const handleClick = () => {
    // 三角形の方向をトグル
    setTriangleDirection(triangleDirection === 'right' ? 'left' : 'right');
  };

  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }>
      
      <img src={Title} alt="" width="600px" />
      <button
          onClick={handleClick}
          style={{
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: `${triangleDirection === 'right' ? '10px 0 10px 20px' : '10px 20px 10px 0'}`, // 右向きの三角形
            borderColor: `transparent white transparent white`, // 色を変更
            outline: 'none', // ボーダーを削除
            cursor: 'pointer', // カーソルをポインターに変更
            background: 'rgba(0, 0, 0, 0.1)'
          }}
      ></button>
      <div style={{
        position: 'relative',
        
      }}>
        <div style={{display: `${triangleDirection === 'right' ? '' : 'none'}`}}>
          <div style={{
            position: 'absolute',
            top: 100,
            left: 300,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${1}`}>ヴァスティタス・ボレアリス</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 100,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${2}`}>アラビア・テラ</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 250,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${3}`}>シルティス・メジャー山</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 450,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${4}`}>ユートピア平原</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 600,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${5}`}>エリジウム山</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 400,
            left: 400,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${6}`}>ティレナ・テラ</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 400,
            left: 600,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${7}`}>エリジウム平原</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 550,
            left: 100,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${8}`}>ノアキス・テラ</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 550,
            left: 350,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${9}`}>ヘラス平原</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 550,
            left: 600,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${10}`}>へスペリア平原</Link>
          </div>
        </div>
        <div style={{display: `${triangleDirection === 'left' ? '' : 'none'}`}}>
          <div style={{
            position: 'absolute',
            top: 100,
            left: 300,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${1}`}>ヴァスティタス・ボレアリス</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 100,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${2}`}>アルカディア平原</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 250,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${3}`}>テンペ</Link>
          </div>
          <div style={{
            position: 'absolute',
            top: 250,
            left: 600,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: '0',
          }}>
            <Link class="my-parts" to={`/purchase/${7}`}>アキダリア平原</Link>
          </div>
        </div>
        <img src={Mars} alt="" width="800px" height="800px" />
      </div>
      <Link to={`/recommend`}>おすすめの土地</Link>
    </div>
  );
};



export default Home;

