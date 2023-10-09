import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MARS_LAND_LIST } from './utils/constant';
import Title from "./static/title.png"
import './styles.css';
import { apiPost } from './utils/api';

function FormSubmitComponent() {
  // コンポーネントがマウントされた後にページのトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const mars_land_info = MARS_LAND_LIST[id];
  const history = useNavigate();

  const [formData, setFormData] = useState({
    price: mars_land_info.price,
    nameKanji: '',
    nameAlphabet: '',
    email: '',
    postcode: '',
    address: '',
    placeName: mars_land_info.name,
    placeAddress: mars_land_info.address
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = 'http://127.0.0.1:5000/purchase';
    console.log(formData);

    // POSTリクエストの設定
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        marsLandInfo: mars_land_info,
      }),
    };

    // Fetch APIを使用してリクエストを送信
    fetch(apiUrl, requestOptions)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error('ネットワークエラー');
        }
        return response.data;
      })
      .then((data) => {
        // レスポンスデータを処理する
        console.log('サーバーレスポンス:', data);
        // 成功した場合、ここで適切なアクションを実行
        // history.push('/thanks')
        history('/thanks', { proofOfPurchase: data } );
      })
      .catch((error) => {
        // エラーハンドリング
        console.error('エラー:', error);
        // 失敗した場合、エラーメッセージを表示または適切なアクションを実行
      });
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
      <div style={{
        position: 'relative',
      }}></div>
      <h1>購入画面</h1>

      <h2>
        土地名：{mars_land_info.name}
      </h2>
      <h2>
        金額：{mars_land_info.price} 円
      </h2>

      <img src={mars_land_info?.image} alt="" width="600px" />

      <h3 style={{whiteSpace: 'pre-line'}}>{mars_land_info.description}</h3>

      <form onSubmit={handleSubmit}>
        {/* フォームの入力部分 */}
        <div>
        <label htmlFor="yournameENG">Name（アルファベット）</label>
            <input
              type="text"
              name="nameAlphabet"
              value={formData.name_alphabet}
              placeholder='Ito Manabu'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="yournameJP">名前（漢字）</label>
          <input
            type="text"
            name="nameKanji"
            value={formData.name_kanji}
            placeholder='伊藤 学'
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label htmlFor="yournameENG">郵便番号</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              placeholder='9860854'
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label htmlFor="yournameENG">住所</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder='宮城県石巻市大街道北１丁目１−１６'
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder='m-Ito@sample.co.jp'
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">送信</button>
        <div>
          <Link to={`/thanks/`}>購入を確定する</Link>
        </div>
        <div>
          <Link to="/">土地一覧に戻る（注意：入力した情報は破棄されます）</Link>
        </div>
      </form>

      <br/>

      <hr />
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
