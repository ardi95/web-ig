import React from 'react'
import { withRouter } from 'react-router-dom'

import '../../style/TimeLine.css'

import {
  Icon as IconAntd
} from 'antd'
import {
  NavBar,
  WingBlank,
  Flex
} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'

class TimeLine extends React.Component {
  render() {
    return (
      <div
        style={{ height: '1000px' }}
      >
        <NavBar
          mode="light"
          icon={<IconAntd type="camera"
            style={{
              fontSize: '30px',
              color: 'black'
            }}
          />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          <img src="images/instaliter.png" alt="Instaliter"
            style={{ width: '140px' }}
          />
        </NavBar>
        <WingBlank
          style={{
            paddingTop: '10px'
          }}
          size="md"
        >
          <Flex>
            <Flex.Item
              style={{
                textAlign: 'center'
              }}
            >
              <p>
                <img src="images/profile.jpeg"
                  alt="Profile 1"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}
                />
              </p>
              <span>Cerita Anda</span>
            </Flex.Item>
            <Flex.Item
              style={{
                textAlign: 'center'
              }}
            >
              <p>
                <img src="images/profile.jpeg"
                  alt="Profile 1"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}
                />
              </p>
              <span>Anisa</span>
            </Flex.Item>
            <Flex.Item
              style={{
                textAlign: 'center'
              }}
            >
              <p>
                <img src="images/profile.jpeg"
                  alt="Profile 1"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}
                />
              </p>
              <span>Amry</span>
            </Flex.Item>
            <Flex.Item
              style={{
                textAlign: 'center'
              }}
            >
              <p>
                <img src="images/profile.jpeg"
                  alt="Profile 1"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}
                />
              </p>
              <span>Rifqi</span>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <hr />
      </div>
    )
  }
}

export default withRouter(TimeLine)