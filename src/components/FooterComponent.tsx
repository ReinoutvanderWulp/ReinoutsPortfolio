import type {FunctionComponent} from 'react'
import {Divider, Space, Typography} from 'antd'
import {InstagramFilled, LinkedinFilled} from '@ant-design/icons'

const {Text, Link} = Typography

const FooterComponent: FunctionComponent = () => (
  <Space direction="vertical" size={4} style={{width: '100%', alignItems: 'center'}}>
    <Text strong style={{fontSize: 15}}>
      Reinout van der Wulp
    </Text>
    <Text type="secondary" style={{fontSize: 13}}>
      Portfolio {new Date().getFullYear()} · Gebouwd met React & Ant Design
    </Text>
    <Divider style={{margin: '8px 0'}} />
    <Space size={12}>
      <Link
        href="https://www.instagram.com/reinoutvanderwulp/"
        target="_blank"
        style={{fontSize: 24, color: '#e1306c'}}>
        <InstagramFilled />
      </Link>
      <Link
        href="https://www.linkedin.com/in/reinout-van-der-wulp-822546251/"
        target="_blank"
        style={{fontSize: 24, color: '#0a66c2'}}>
        <LinkedinFilled />
      </Link>
    </Space>
  </Space>
)

export default FooterComponent
