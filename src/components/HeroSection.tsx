import type {CSSProperties, FunctionComponent} from 'react'
import {Col, Image, Row, Space, Typography} from 'antd'
import DownloadButton from '@/components/DownloadButton.tsx'

const {Title, Paragraph} = Typography

const titleStyle: CSSProperties = {
  color: '#1677ff',
  marginBottom: 0,
}

const HeroSection: FunctionComponent = () => {
  return (
    <div>
      <Row align="middle" gutter={[32, 32]}>
        <Col xs={24} md={16}>
          <Space direction="vertical" size="middle">
            <Title level={1} style={titleStyle}>
              Reinout van der Wulp
            </Title>
            <Paragraph style={{fontSize: 16}}>
              Programmeur, gespecialiseerd in Frontend Development, react & C#. Klaar voor de volgende uitdaging!
            </Paragraph>
            <Paragraph>Bekijk mijn projecten of neem contact op met mij!</Paragraph>
            <DownloadButton
              fileName="ReinoutvdW-CV.pdf"
              fileUrl="/documents/ReinoutvdW-CV.pdf"
              buttonText="Download CV"
            />
          </Space>
        </Col>
        <Col xs={24} md={8} style={{textAlign: 'center'}}>
          <Image src="/images/Reinout.png" width={200} preview={false} style={{borderRadius: '45%'}} />
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection
