import type {CSSProperties, FunctionComponent} from 'react'
import {Button} from 'antd'
import {MailOutlined} from '@ant-design/icons'

const buttonStyle: CSSProperties = {
  borderRadius: 10,
  fontWeight: 600,
}

const MailButton: FunctionComponent = () => (
  <Button type="primary" icon={<MailOutlined />} href="mailto:reinoutvanderwulp@gmail.com" style={buttonStyle}>
    Stuur mij een mail
  </Button>
)

export default MailButton
