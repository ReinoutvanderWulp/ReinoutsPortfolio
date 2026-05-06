import type { CSSProperties, FunctionComponent } from 'react'
import { Card, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router'

const { Text } = Typography

interface CardComponentProps {
  title: string
  url: string
  pageName: string
  src?: string
}

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  display: 'flex',
  width: '100%',
}

const cardStyle: CSSProperties = {
  width: '100%',
  borderRadius: 16,
}

const cardBodyStyle: CSSProperties = {
  padding: '20px 24px',
}

const pageNameStyle: CSSProperties = {
  fontSize: 17,
  fontWeight: 700,
}

const arrowTextStyle: CSSProperties = {
  color: '#0ea5e9',
  fontWeight: 600,
  fontSize: 13,
}

const arrowIconStyle: CSSProperties = {
  fontSize: 11,
}

const coverStyle: CSSProperties = {
  height: 180,
  objectFit: 'cover',
}

const footerStyle: CSSProperties = {
  marginTop: 16,
}

const CardComponent: FunctionComponent<CardComponentProps> = ({ title, url, pageName, src }) => (
  <Link to={url} style={linkStyle}>
    <Card
      hoverable
      cover={src ? <img src={src} alt={pageName} style={coverStyle} /> : undefined}
      style={cardStyle}
      styles={{ body: cardBodyStyle }}
    >
      <Card.Meta
        title={<span style={pageNameStyle}>{pageName}</span>}
        description={<Text type="secondary">{title}</Text>}
      />
      <div style={footerStyle}>
        <Text style={arrowTextStyle}>
          Bekijk <ArrowRightOutlined style={arrowIconStyle} />
        </Text>
      </div>
    </Card>
  </Link>
)

export default CardComponent
