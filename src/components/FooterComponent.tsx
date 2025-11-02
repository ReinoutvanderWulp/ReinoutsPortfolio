import type {CSSProperties, FunctionComponent} from 'react'
import {Typography} from 'antd'
import {InstagramFilled, LinkedinFilled} from '@ant-design/icons'

const {Title, Paragraph, Text} = Typography

const iconStyle: CSSProperties = {
  fontSize: '24px',
}

const FooterComponent: FunctionComponent = () => {
  return (
    <div>
      <Typography>
        <Title level={4}>Reinout van der Wulp's Portfolio</Title>
        <Paragraph>
          Created in {new Date().getFullYear()} with <Text style={{color: '#1677ff'}}>React & Ant Design</Text>
        </Paragraph>
      </Typography>
      <div>
        <a href="https://www.instagram.com/reinoutvanderwulp/" target="_blank">
          <InstagramFilled style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/reinout-van-der-wulp-822546251/" target="_blank">
          <LinkedinFilled style={iconStyle} />
        </a>
      </div>
    </div>
  )
}

export default FooterComponent
