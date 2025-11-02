import type {FunctionComponent} from 'react'
import {Rate} from 'antd'

interface StarComponentProps {
  rate: number
  text: string
}

const StarComponent: FunctionComponent<StarComponentProps> = ({rate, text}) => {
  return (
    <div>
      {text}
      <Rate disabled defaultValue={rate} />
    </div>
  )
}

export default StarComponent
