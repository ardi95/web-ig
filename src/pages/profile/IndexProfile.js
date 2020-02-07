import React from 'react'
import Footer from '../../components/Footer';
import {
  // WingBlank,
  Icon,
  NavBar,
  WingBlank,
  Button,
  WhiteSpace,
  Tabs
} from 'antd-mobile'

import {
  Icon as IconAntd,
  Row,
  Col
} from 'antd';

import 'antd/dist/antd.css';
import '../../style/Profile.css'

const tabs = [
  { title: <IconAntd type="table"></IconAntd> },
  { title: <IconAntd type="idcard"></IconAntd> },
];

class Profile extends React.Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <NavBar
          mode="light"
          rightContent={[
            <IconAntd
            key="icon-down-navbar"
            style={{
              color: 'black'
            }}
            type="menu" />
          ]}
        >ardiansyahpratama95 <Icon key="icon-navbar" type="down"></Icon></NavBar>
        {/* NAVBAR */}

        {/* BODY */}
        <WingBlank
        style={{
          paddingTop: '10px'
        }}
        >
          <Row type="flex" justify="start" align="middle">
            <Col xs={6}>
              <img src="images/profile.jpeg"
                alt="Profile 1"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%'
                }}
              />
            </Col>
            <Col xs={6}>
              <Row className="row-profile">
                <h4>10</h4>
              </Row>
              <Row className="row-profile">
                <p>Postingan</p>
              </Row>
            </Col>
            
            <Col xs={6}>
              <Row className="row-profile">
                <h4>900</h4>
              </Row>
              <Row className="row-profile">
                <p>Pengikut</p>
              </Row>
            </Col>

            <Col xs={6}>
              <Row className="row-profile">
                <h4>134</h4>
              </Row>
              <Row className="row-profile">
                <p>Mengikuti</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <span>
              <b>Ardiansyah Pratama</b>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, et!
            </p>
          </Row>
          <Row>
            <Button
              style={{
                marginBottom: '10px'
              }}
            >Edit Profile</Button>
            <Col xs={12}>
              <span><b>Sorotan Cerita</b></span>
            </Col>
            <Col xs={12} align="end">
              <Icon type="down"></Icon>
            </Col>
          </Row>
        </WingBlank>
        {/* BODY */}
        
        <WhiteSpace></WhiteSpace>
        {/* PHOTO */}
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div>
            <Row>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
              <Col xs={8}>
                <img src="images/profile.jpeg" alt="Instaliter"
                  style={{ 
                    width: '100%',
                    height: '130px' 
                  }}
                />
              </Col>
            </Row>
          </div>
        </Tabs>
        {/* PHOTO */}

        <Footer></Footer>
      </div>
    )
  }
}

export default Profile