import React from 'react'

import 'antd-mobile/dist/antd-mobile.css'
import { 
  WingBlank,
  WhiteSpace,
  // InputItem,
  Button
} from 'antd-mobile'

import {
  Input
} from 'antd'

import 'antd/dist/antd.css';
import '../style/Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = () => {
    if (this.state.email === 'ardi@aranproduk.com' && this.state.password === 'rahasia') {
      this.props.history.push('time-line')
    }
  }

  render() {
    return (
      <div style={{ 
        padding: '100px 0'
      }}>
        <WingBlank>
          <div style={{ 
            textAlign: 'center'
          }}>
            <img src="images/instaliter.png" alt="Instaliter" />
          </div>

          <WhiteSpace></WhiteSpace>

          <Input
            name="email"
            placeholder="Nomor telpon, email, atau nama pengguna"
            value={this.state.email}
            onChange={this.handleChange}
          ></Input>

          <WhiteSpace></WhiteSpace>

          <Input
            type="password"
            name="password"
            placeholder="Kata Sandi"
            value={this.state.password}
            onChange={this.handleChange}
          ></Input>

          <WhiteSpace></WhiteSpace>
          
          <Button 
          type="primary"
          disabled={this.state.email === '' || this.state.password === ''}
          onClick={this.submit}>Masuk</Button>
        </WingBlank>

        <hr 
          style={{ marginTop: '150px' }}
        />

        <div id="Footer">
          <h4>from</h4>
          <h2>Ardiansyah Pratama</h2>
        </div>
      </div>
    )
  }
}

export default Login