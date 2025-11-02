import type {FunctionComponent, ReactNode} from 'react'

interface IconComponentProps {
  icon: ReactNode
  data: string
}

const IconComponent: FunctionComponent<IconComponentProps> = ({icon, data}) => {
  return (
    <div>
      {icon} {data}
    </div>
  )
}

export default IconComponent
