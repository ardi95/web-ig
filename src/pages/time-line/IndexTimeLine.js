import React from 'react'
import Footer from '../../components/Footer';
import { withRouter } from 'react-router-dom'

import '../../style/TimeLine.css'
import 'antd/dist/antd.css';

import {
  Icon as IconAntd, 
  Row,
  Col
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
      <div>
        {/* NAVBAR */}
        <NavBar
          mode="light"
          icon={<IconAntd type="camera"
            style={{
              fontSize: '30px',
              color: 'black',
            }}
          />}
          rightContent={[
            <svg key="svg-navbar" aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
          ]}
          onLeftClick={() => console.log('onLeftClick')}
        >
          <img src="images/instaliter.png" alt="Instaliter"
            style={{ width: '140px' }}
          />
        </NavBar>
        {/* NAVBAR */}

        {/* STORY */}
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
        {/* STORY */}

        <hr
          style={{
            backgroundColor: 'grey',
            opacity: 0.2
          }}
        />

        {/* TIMELINE */}
        <WingBlank
          style={{
            paddingBottom: '5px'
          }}
        >
          <Row type="flex" align="middle">
            <Col xs={3}>
              <img src="images/profile.jpeg"
                alt="Profile 1"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}
              />
            </Col>
            <Col xs={17}>
              <h4>Amry</h4>
            </Col>
            <Col xs={4}
              style={{
                textAlign: 'right'
              }}
            >
              <IconAntd 
                type="ellipsis"
                style={{
                  transform: 'rotate(90deg)'
                }}
              ></IconAntd>
            </Col>
          </Row>
        </WingBlank>
        <img src="images/profile.jpeg"
          alt="Profile 1"
          style={{
            width: '100%',
            maxHeight: '350px'
          }}
        />

        <WingBlank
          style={{
            paddingTop: '10px'
          }}
        >
          <Row>
            <Col xs={3}>
              <i className="far fa-heart icon-time-line"></i>
            </Col>
            <Col xs={3}>
              <i
              style={{
                transform: 'scaleX(-1)'
              }}
              className="far fa-comment icon-time-line"></i>
            </Col>
            <Col xs={3}>
            <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
            </Col>
            <Col 
            style={{
              textAlign: 'right'
            }}
            xs={15}>
              <i className="far fa-bookmark icon-time-line"></i>
            </Col>
          </Row>
            <p>
              <b>Amry</b> Lorem ipsum dolor sit amet.    
            </p>
        </WingBlank>
        {/* TIMELINE */}

        {/* TIMELINE */}
        <WingBlank
          style={{
            paddingBottom: '5px'
          }}
        >
          <Row type="flex" align="middle">
            <Col xs={3}>
              <img src="images/profile.jpeg"
                alt="Profile 1"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}
              />
            </Col>
            <Col xs={17}>
              <h4>Anisa</h4>
            </Col>
            <Col xs={4}
              style={{
                textAlign: 'right'
              }}
            >
              <IconAntd 
                type="ellipsis"
                style={{
                  transform: 'rotate(90deg)'
                }}
              ></IconAntd>
            </Col>
          </Row>
        </WingBlank>
        <img src="images/profile.jpeg"
          alt="Profile 1"
          style={{
            width: '100%',
            maxHeight: '350px'
          }}
        />

        <WingBlank
          style={{
            paddingTop: '10px'
          }}
        >
          <Row>
            <Col xs={3}>
              <i className="far fa-heart icon-time-line"></i>
            </Col>
            <Col xs={3}>
              <i
              style={{
                transform: 'scaleX(-1)'
              }}
              className="far fa-comment icon-time-line"></i>
            </Col>
            <Col xs={3}>
            <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
            </Col>
            <Col 
            style={{
              textAlign: 'right'
            }}
            xs={15}>
              <i className="far fa-bookmark icon-time-line"></i>
            </Col>
          </Row>
            <p>
              <b>Anisa</b> Lorem ipsum dolor sit amet.    
            </p>
        </WingBlank>
        {/* TIMELINE */}

        <Footer></Footer>
      </div>
    )
  }
}

export default withRouter(TimeLine)