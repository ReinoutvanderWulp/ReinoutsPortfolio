import {Card, Image} from 'antd'
import type {FunctionComponent} from 'react'
import {Link} from 'react-router'

const {Meta} = Card

interface CardComponentProps {
  src: string
  title: string
  url: string
  pageName: string
}

const CardComponent: FunctionComponent<CardComponentProps> = ({src, title, url, pageName}) => {
  return (
    <Card hoverable style={{width: 240}} cover={<Image width={200} src={src} />} extra={<Link to={url}>{pageName}</Link>}>
      <Meta title={title} />
    </Card>
  )
}

export default CardComponent
