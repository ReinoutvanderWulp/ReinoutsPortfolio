import type {FunctionComponent} from 'react'
import {Select} from 'antd'

interface SelectComponentProps {
  data: string[]
  onChange: (value: string) => void
}

const SelectComponent: FunctionComponent<SelectComponentProps> = ({data, onChange}) => (
  <Select
    onChange={onChange}
    placeholder="Filter op project"
    style={{minWidth: 200}}
    options={data.map(item => ({value: item, label: item}))}
  />
)

export default SelectComponent
