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
    <Link to={url} style={{textDecoration: 'none'}}>
      <Card
        hoverable
        style={{width: '100%', height: '100%', borderRadius: 12}}
        cover={<Image width={200} src={src} preview={false}/>}>
        <Meta title={<span style={{fontSize: 18}}>{pageName}</span>}
              description={title}/>
      </Card>
    </Link>
  )
}

export default CardComponent
