import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MARS_LAND_LIST } from './utils/constant';
import './styles.css';

function FormSubmitComponent() {
  const { id } = useParams();
  console.log(id)
  const mars_land_info = MARS_LAND_LIST[id];
  const history = useNavigate();

  const [formData, setFormData] = useState({
    yournameJP: '',
    yournameENG: '',
    email: '',
    postalCode: '',
    address: '',
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
    const apiUrl = 'https://api.example.com/submit-form';

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
        if (!response.ok) {
          throw new Error('ネットワークエラー');
        }
        return response.json();
      })
      .then((data) => {
        // レスポンスデータを処理する
        console.log('サーバーレスポンス:', data);
        // 成功した場合、ここで適切なアクションを実行
        history.push('/thanks');
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
      <h1>購入画面</h1>

      <h2>
        土地名：{mars_land_info.name}
      </h2>
      <h2>
        金額：{mars_land_info.price} 円
      </h2>

      <h3 style={{ width: '600px' }}>{mars_land_info.description}</h3>

      <form onSubmit={handleSubmit}>
        {/* フォームの入力部分 */}
        <div>
          <label htmlFor="yournameJP">名前（漢字）</label>
          <input
            type="text"
            id="yournameJP"
            name="yournameJP"
            value={formData.yournameJP}
            placeholder='伊藤 学'
            onChange={handleInputChange}
          />
        </div>
        {/* 他のフォーム入力部分 */}
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
