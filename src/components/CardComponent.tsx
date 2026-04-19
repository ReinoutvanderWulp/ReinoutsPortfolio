import type {FunctionComponent} from 'react'
import {Card, Typography} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
import {Link} from 'react-router'

const {Text} = Typography

interface CardComponentProps {
  title: string
  url: string
  pageName: string
  src?: string
}

const CardComponent: FunctionComponent<CardComponentProps> = ({title, url, pageName, src}) => (
  <Link to={url} style={{textDecoration: 'none', display: 'flex', width: '100%'}}>
    <Card
      hoverable
      cover={src ? <img src={src} alt={pageName} style={{height: 180, objectFit: 'cover'}} /> : undefined}
      style={{width: '100%', borderRadius: 16}}
      styles={{body: {padding: '20px 24px'}}}>
      <Card.Meta
        title={<span style={{fontSize: 17, fontWeight: 700}}>{pageName}</span>}
        description={<Text type="secondary">{title}</Text>}
      />
      <div style={{marginTop: 16}}>
        <Text style={{color: '#0ea5e9', fontWeight: 600, fontSize: 13}}>
          Bekijk <ArrowRightOutlined style={{fontSize: 11}} />
        </Text>
      </div>
    </Card>
  </Link>
)

export default CardComponent
