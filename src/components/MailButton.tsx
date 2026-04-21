import type {FunctionComponent} from 'react'
import {Button} from 'antd'
import {MailOutlined} from '@ant-design/icons'

const MailButton: FunctionComponent = () => (
  <Button
    type="primary"
    icon={<MailOutlined />}
    href="mailto:reinoutvanderwulp@gmail.com"
    style={{borderRadius: 10, fontWeight: 600}}>
    Stuur mij een mail
  </Button>
)

export default MailButton
