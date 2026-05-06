import type {CSSProperties, FunctionComponent} from 'react'
import {Typography} from 'antd'

const {Text} = Typography

interface SectionLabelProps {
  label: string
}

const labelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: 8,
}

const SectionLabel: FunctionComponent<SectionLabelProps> = ({label}) => (
  <Text type="secondary" style={labelStyle}>
    {label}
  </Text>
)

export default SectionLabel
