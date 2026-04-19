import type {FunctionComponent} from 'react'
import {Flex, Typography} from 'antd'
import type {ContactInfo} from '@/interfaces/ContactInfo.ts'

const {Text} = Typography

interface ContactInfoProps {
  item: ContactInfo
  isLast?: boolean
}

const ContactInfoComponent: FunctionComponent<ContactInfoProps> = ({item, isLast}) => (
  <Flex
    align="center"
    gap={16}
    style={{
      padding: '20px 24px',
      borderBottom: isLast ? 'none' : '1px solid #f1f5f9',
    }}>
    <Flex
      align="center"
      justify="center"
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: '#f0f9ff',
        border: '1px solid #bae6fd',
        flexShrink: 0,
      }}>
      {item.icon}
    </Flex>
    <div>
      <Text
        type="secondary"
        style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block'}}>
        {item.label}
      </Text>
      <Text strong style={{fontSize: 15}}>
        {item.value}
      </Text>
    </div>
  </Flex>
)

export default ContactInfoComponent
