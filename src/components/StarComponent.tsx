import type {CSSProperties, FunctionComponent} from 'react'
import {Flex, Rate, Typography} from 'antd'

const {Text} = Typography

interface StarComponentProps {
  rate: number
  text: string
}

const rowStyle: CSSProperties = {
  padding: '10px 0',
  borderBottom: '1px solid #f1f5f9',
  gap: 16,
}

const textStyle: CSSProperties = {
  fontSize: 15,
}

const rateStyle: CSSProperties = {
  fontSize: 14,
  color: '#0ea5e9',
  flexShrink: 0,
}

const StarComponent: FunctionComponent<StarComponentProps> = ({rate, text}) => (
  <Flex align="center" justify="space-between" style={rowStyle}>
    <Text strong style={textStyle}>
      {text}
    </Text>
    <Rate disabled defaultValue={rate} style={rateStyle} />
  </Flex>
)

export default StarComponent
