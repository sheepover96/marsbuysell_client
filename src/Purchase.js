import React, { Component } from 'react';
import './styles.css';

class FormSubmitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        yournameJP: '',
        yournameENG: '',
        email: '',
        postalCode: '',
        address: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = 'https://api.example.com/submit-form';

    // POSTリクエストの設定
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.formData),
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
        this.props.history.push('/thanks');
      })
      .catch((error) => {
        // エラーハンドリング
        console.error('エラー:', error);
        // 失敗した場合、エラーメッセージを表示または適切なアクションを実行
      });
  };

  render() {
    const { formData } = this.state;

    return (
      <div>
        <h2>フォーム送信画面</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="yournameJP">名前（漢字）</label>
            <input
              type="text"
              id="yournameJP"
              name="yournameJP"
              value={formData.yournameJP}
              placeholder='伊藤 学'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="yournameENG">Name（アルファベット）</label>
            <input
              type="text"
              id="yournameENG"
              name="yournameENG"
              value={formData.yournameENG}
              placeholder='Ito Manabu'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="yournameENG">郵便番号</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              placeholder='9860854'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="yournameENG">住所</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder='宮城県石巻市大街道北１丁目１−１６'
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}

export default FormSubmitComponent;
