import type {FunctionComponent} from 'react'
import {Typography} from 'antd'
import type {ContactInfo} from '@/interfaces/ContactInfo.ts'

const {Title, Paragraph} = Typography

interface ContactInfoProps {
  item: ContactInfo
}

const ContactInfoComponent: FunctionComponent<ContactInfoProps> = ({item}) => {
  return (
    <div>
      <div>{item.icon}</div>
      <div>
        <Typography>
          <Title level={5}>{item.label}</Title>
          <Paragraph>{item.value}</Paragraph>
        </Typography>
      </div>
    </div>
  )
}

export default ContactInfoComponent
