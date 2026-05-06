import type { CSSProperties, FunctionComponent } from 'react'
import { Avatar, Badge, Col, Row, Space, Tag, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import DownloadButton from '@/components/DownloadButton.tsx'

const { Title, Paragraph } = Typography

const tagStyle: CSSProperties = {
  borderRadius: 100,
  padding: '2px 12px',
  fontWeight: 600,
}

const titleStyle: CSSProperties = {
  marginBottom: 4,
  fontSize: 'clamp(28px, 5vw, 48px)',
  fontWeight: 800,
  lineHeight: 1.1,
}

const subtitleStyle: CSSProperties = {
  marginTop: 0,
  fontWeight: 500,
}

const paragraphStyle: CSSProperties = {
  fontSize: 16,
  maxWidth: 480,
  marginBottom: 0,
}

const avatarColStyle: CSSProperties = {
  textAlign: 'center',
}

const avatarStyle: CSSProperties = {
  border: '4px solid #0ea5e9',
}

const HeroSection: FunctionComponent = () => (
  <Row align="middle" gutter={[48, 40]}>
    <Col xs={24} md={15}>
      <Space direction="vertical" size={16}>
        <Tag color="blue" style={tagStyle}>
          <Badge status="success" /> Beschikbaar voor nieuwe uitdagingen
        </Tag>

        <div>
          <Title style={titleStyle}>Reinout van der Wulp</Title>
          <Title level={3} type="secondary" style={subtitleStyle}>
            Frontend en Full-Stack Developer · React & C#
          </Title>
        </div>

        <Paragraph type="secondary" style={paragraphStyle}>
          Gepassioneerd door moderne webapplicaties maken in React en .NET. Op zoek naar mijn volgende uitdaging.
        </Paragraph>

        <DownloadButton
          fileName="ReinoutvdW-CV.pdf"
          fileUrl="/documents/ReinoutvdW-CV.pdf"
          buttonText="Download CV"
        />
      </Space>
    </Col>

    <Col xs={24} md={9} style={avatarColStyle}>
      <Avatar size={200} src="/images/Reinout.png" icon={<UserOutlined />} style={avatarStyle} />
    </Col>
  </Row>
)

export default HeroSection
