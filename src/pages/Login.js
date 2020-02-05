import React from 'react'
import { withRouter } from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css'
import { 
  WingBlank,
  WhiteSpace,
  InputItem,
  Button
} from 'antd-mobile'

import '../style/Login.css'

class Login extends React.Component {
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

          <InputItem
            placeholder="Nomor telpon, email, atau nama pengguna"
          ></InputItem>

          <WhiteSpace></WhiteSpace>

          <InputItem
            type="password"
            placeholder="Nomor telpon, email, atau nama pengguna"
          ></InputItem>

          <WhiteSpace></WhiteSpace>
          
          <Button type="primary" disabled>Masuk</Button>
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

export default withRouter(Login)