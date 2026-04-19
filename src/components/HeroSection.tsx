import type {FunctionComponent} from 'react'
import {Avatar, Badge, Button, Col, Row, Space, Tag, Typography} from 'antd'
import {DownloadOutlined, UserOutlined} from '@ant-design/icons'

const {Title, Paragraph} = Typography

const HeroSection: FunctionComponent = () => (
  <Row align="middle" gutter={[48, 40]}>
    <Col xs={24} md={15}>
      <Space direction="vertical" size={16}>
        <Tag color="blue" style={{borderRadius: 100, padding: '2px 12px', fontWeight: 600}}>
          <Badge status="success" /> Beschikbaar voor nieuwe uitdagingen
        </Tag>

        <div>
          <Title style={{marginBottom: 4, fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.1}}>
            Reinout van der Wulp
          </Title>
          <Title level={3} type="secondary" style={{marginTop: 0, fontWeight: 500}}>
            Frontend en Full-Stack Developer · React & C#
          </Title>
        </div>

        <Paragraph style={{fontSize: 16, maxWidth: 480, marginBottom: 0}} type="secondary">
          Gepassioneerd door moderne webapplicaties maken in React en .NET. Op zoek naar mijn
          volgende uitdaging.
        </Paragraph>

        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          href="/documents/ReinoutvdW-CV.pdf"
          download="ReinoutvdW-CV.pdf"
          style={{borderRadius: 10, fontWeight: 600}}>
          Download CV
        </Button>
      </Space>
    </Col>

    <Col xs={24} md={9} style={{textAlign: 'center'}}>
      <Avatar
        size={200}
        src="/images/Reinout.png"
        icon={<UserOutlined />}
        style={{
          border: '4px solid #0ea5e9',
          boxShadow: '0 0 0 6px #e0f2fe',
        }}
      />
    </Col>
  </Row>
)

export default HeroSection
