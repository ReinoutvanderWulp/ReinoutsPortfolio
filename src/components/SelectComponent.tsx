import type {FunctionComponent} from 'react'
import {Select} from 'antd'

interface SelectComponentProps {
  data: string[]
  onChange: (value: string) => void
}

const SelectComponent: FunctionComponent<SelectComponentProps> = ({data, onChange}) => {
  return (
    <Select
      onChange={onChange}
      placeholder="Selecteer een project"
      options={[data.map((item) => ({value: item, label: item}))]}
    />
  )
}

export default SelectComponent
