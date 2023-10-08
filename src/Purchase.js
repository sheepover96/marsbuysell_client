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
    // フォームデータをサーバーに送信または他の処理を行う
    console.log('フォームデータが送信されました:', this.state.formData);
  };

  render() {
    const { formData } = this.state;

    return (
      <div>
        <h2>フォーム送信画面</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="yournameJP">名前</label>
            <input type="text" id="yournameJP" name="yournameJP"
              value={formData.yournameJP} onChange={this.handleInputChange}/>
          </div>
          <div>
            <label htmlFor="yournameENG">Name</label>
            <input type="text" id="yournameENG" name="yournameENG"
              value={formData.yournameENG} onChange={this.handleInputChange}/>
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }
}

export default FormSubmitComponent;