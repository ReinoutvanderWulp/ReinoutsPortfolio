import {Card, Image} from 'antd'
import type {FunctionComponent} from 'react'
import {Link} from 'react-router'

const {Meta} = Card

interface CardComponentProps {
  src?: string
  title: string
  url: string
  pageName: string
}

const CardComponent: FunctionComponent<CardComponentProps> = ({src, title, url, pageName}) => {
  return (
    <Link to={url} className="group no-underline">
      <Card
        hoverable
        style={{width: 400}}
        cover={<Image width={200} src={src} preview={false} />}
        extra={title}
        className="group-hover:text-[#1677ff] transition-colors duration-300">
        <Meta title={<span className="group-hover:text-[#1677ff] transition-colors duration-300">{pageName}</span>} />
      </Card>
    </Link>
  )
}

export default CardComponent
