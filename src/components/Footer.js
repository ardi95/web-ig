import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Icon as IconAntd
} from 'antd'

import {
  Flex
} from 'antd-mobile'

import 'antd/dist/antd.css';
import '../style/Footer.css'

class Footer extends React.Component {

  linkFooter = url => {
    this.props.history.push(url)
  }

  render() {
    return (
      <div
        style={{
          borderTop: '2px solid rgba(0,0,0,0.2)',
          zIndex: '20',
          position: 'fixed',
          height: 'auto',
          bottom: 0,
          backgroundColor: 'white',
          padding: '10px 0px',
          width: '100%'
        }}
      >
        <Flex>
          <Flex.Item
          onClick={() => this.linkFooter("time-line")}
          className="flex-footer">
            <IconAntd 
            type="home"
            className="icon-time-line"
            ></IconAntd>
          </Flex.Item>
          <Flex.Item className="flex-footer">
            <IconAntd 
            type="search"
            className="icon-time-line"
            ></IconAntd>
          </Flex.Item>
          <Flex.Item className="flex-footer">
            <i className="far fa-plus-square icon-time-line"></i>
          </Flex.Item>
          <Flex.Item className="flex-footer">
            <i className="far fa-heart icon-time-line"></i>
          </Flex.Item>
          <Flex.Item 
          onClick={() => this.linkFooter("profile")}
          className="flex-footer">
            <IconAntd 
            type="user"
            className="icon-time-line"
            ></IconAntd>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default withRouter(Footer)