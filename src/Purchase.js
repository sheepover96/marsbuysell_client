import React, { Component } from 'react';

class FormSubmitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
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
            <label htmlFor="firstName">名</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">姓</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
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
