import type {FunctionComponent} from 'react'
import {Flex, Rate, Typography} from 'antd'

const {Text} = Typography

interface StarComponentProps {
  rate: number
  text: string
}

const StarComponent: FunctionComponent<StarComponentProps> = ({rate, text}) => (
  <Flex align="center" justify="space-between" style={{padding: '10px 0', borderBottom: '1px solid #f1f5f9', gap: 16}}>
    <Text strong style={{fontSize: 15}}>
      {text}
    </Text>
    <Rate disabled defaultValue={rate} style={{fontSize: 14, color: '#0ea5e9', flexShrink: 0}} />
  </Flex>
)

export default StarComponent
