import type {CSSProperties, FunctionComponent} from 'react'
import {Divider, Space, Typography} from 'antd'
import {GithubFilled, InstagramFilled, LinkedinFilled} from '@ant-design/icons'

const {Text, Link} = Typography

const wrapperStyle: CSSProperties = {
  width: '100%',
  alignItems: 'center',
}

const nameStyle: CSSProperties = {
  fontSize: 15,
}

const subtitleStyle: CSSProperties = {
  fontSize: 13,
}

const dividerStyle: CSSProperties = {
  margin: '8px 0',
}

const instagramStyle: CSSProperties = {
  fontSize: 24,
  color: '#e1306c',
}

const linkedinStyle: CSSProperties = {
  fontSize: 24,
  color: '#0a66c2',
}

const githubStyle: CSSProperties = {
  fontSize: 24,
  color: '#000000',
}

const FooterComponent: FunctionComponent = () => (
  <Space direction="vertical" size={4} style={wrapperStyle}>
    <Text strong style={nameStyle}>
      Reinout van der Wulp
    </Text>
    <Text type="secondary" style={subtitleStyle}>
      Portfolio {new Date().getFullYear()} · Gebouwd met React & Ant Design
    </Text>
    <Divider style={dividerStyle} />
    <Space size={12}>
      <Link href="https://www.instagram.com/reinoutvanderwulp/" target="_blank" style={instagramStyle}>
        <InstagramFilled />
      </Link>
      <Link href="https://www.linkedin.com/in/reinoutvanderwulp/" target="_blank" style={linkedinStyle}>
        <LinkedinFilled />
      </Link>
      <Link href="https://github.com/ReinoutvanderWulp" target="_blank" style={githubStyle}>
        <GithubFilled />
      </Link>
    </Space>
  </Space>
)

export default FooterComponent
