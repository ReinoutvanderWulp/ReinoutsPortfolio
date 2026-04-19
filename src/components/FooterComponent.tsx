import type {FunctionComponent} from 'react'
import {Space, Typography} from 'antd'
import {InstagramFilled, LinkedinFilled} from '@ant-design/icons'

const {Text, Link} = Typography

const FooterComponent: FunctionComponent = () => (
  <Space direction="vertical" size={12} style={{width: '100%', alignItems: 'center'}}>
    <Text type="secondary" style={{fontWeight: 500}}>
      Reinout van der Wulp · Portfolio {new Date().getFullYear()}
    </Text>
    <Text type="secondary" style={{fontSize: 13}}>
      Gebouwd met React & Ant Design
    </Text>
    <Space size={8}>
      <Link
        href="https://www.instagram.com/reinoutvanderwulp/"
        target="_blank"
        style={{fontSize: 22, color: '#94a3b8'}}>
        <InstagramFilled />
      </Link>
      <Link
        href="https://www.linkedin.com/in/reinout-van-der-wulp-822546251/"
        target="_blank"
        style={{fontSize: 22, color: '#94a3b8'}}>
        <LinkedinFilled />
      </Link>
    </Space>
  </Space>
)

export default FooterComponent
