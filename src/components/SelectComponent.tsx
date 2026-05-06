import type { CSSProperties, FunctionComponent } from 'react'
import { Select } from 'antd'

interface SelectComponentProps {
  data: string[]
  onChange: (value: string) => void
}

const selectStyle: CSSProperties = {
  minWidth: 200,
}

const SelectComponent: FunctionComponent<SelectComponentProps> = ({ data, onChange }) => (
  <Select
    onChange={onChange}
    placeholder="Filter op project"
    style={selectStyle}
    options={data.map(item => ({ value: item, label: item }))}
  />
)

export default SelectComponent
