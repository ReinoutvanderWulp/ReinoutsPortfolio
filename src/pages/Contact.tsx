import type {CSSProperties, FunctionComponent} from 'react'
import {Card, Col, Row, Typography} from 'antd'
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons'
import type {ContactInfo} from '@/interfaces/ContactInfo.ts'
import ContactInfoComponent from '@/components/ContactInfoComponent.tsx'
import MailButton from '@/components/MailButton.tsx'

const {Title, Paragraph, Text} = Typography

const iconStyle: CSSProperties = {
  color: '#0ea5e9',
  fontSize: 20,
}

const contactInfo: ContactInfo[] = [
  {label: 'Werklocatie', value: 'Momenteel werkzoekend', icon: <EnvironmentOutlined style={iconStyle} />},
  {label: 'Email', value: 'reinoutvanderwulp@gmail.com', icon: <MailOutlined style={iconStyle} />},
  {label: 'Telefoon', value: '+32 467 33 77 84', icon: <PhoneOutlined style={iconStyle} />},
]

const labelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}

const titleStyle: CSSProperties = {
  marginTop: 8,
  marginBottom: 8,
}

const paragraphStyle: CSSProperties = {
  fontSize: 16,
  maxWidth: 480,
  marginBottom: 40,
}

const cardStyle: CSSProperties = {
  borderRadius: 16,
}

const cardBodyStyle: CSSProperties = {
  padding: 0,
}

const mailButtonWrapperStyle: CSSProperties = {
  marginTop: 24,
}

const Contact: FunctionComponent = () => (
  <div>
    <Text type="secondary" style={labelStyle}>
      Neem contact op
    </Text>
    <Title level={2} style={titleStyle}>
      Laten we samenwerken
    </Title>
    <Paragraph type="secondary" style={paragraphStyle}>
      Ik kom graag met u in contact! Hieronder vindt u mijn gegevens.
    </Paragraph>

    <Row gutter={[32, 32]}>
      <Col xs={24} lg={12}>
        <Card style={cardStyle} styles={{body: cardBodyStyle}}>
          {contactInfo.map((item, index) => (
            <ContactInfoComponent item={item} key={index} isLast={index === contactInfo.length - 1} />
          ))}
        </Card>
        <div style={mailButtonWrapperStyle}>
          <MailButton />
        </div>
      </Col>
    </Row>
  </div>
)

export default Contact
