import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
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
        <img src={Mars} alt="" width="800px" height="800px" />
      </div>
      <br />
      <h4>column</h4>
      <Link class="links" to={`/recommend`}>あなたにぴったりの土地を探そう！人気の土地10選</Link>
    </div>
  );
};

export default Home;

