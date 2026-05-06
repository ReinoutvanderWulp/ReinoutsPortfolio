import type { CSSProperties, FunctionComponent, ReactNode } from 'react'
import { Flex, Typography } from 'antd'

const { Text } = Typography

interface IconComponentProps {
  icon: ReactNode
  data: string
}

const rowStyle: CSSProperties = {
  padding: '10px 0',
  borderBottom: '1px solid #f1f5f9',
}

const iconWrapperStyle: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 8,
  background: '#f0f9ff',
  border: '1px solid #bae6fd',
  flexShrink: 0,
  fontSize: 16,
  color: '#0ea5e9',
}

const textStyle: CSSProperties = {
  fontSize: 15,
}

const IconComponent: FunctionComponent<IconComponentProps> = ({ icon, data }) => (
  <Flex align="center" gap={12} style={rowStyle}>
    <Flex align="center" justify="center" style={iconWrapperStyle}>
      {icon}
    </Flex>
    <Text style={textStyle}>{data}</Text>
  </Flex>
)

export default IconComponent
