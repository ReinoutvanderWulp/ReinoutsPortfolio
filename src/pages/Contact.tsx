import type {FunctionComponent} from 'react'
import {Card, Col, Row, Typography} from 'antd'
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons'
import type {ContactInfo} from '@/interfaces/ContactInfo.ts'
import ContactInfoComponent from '@/components/ContactInfoComponent.tsx'
import MailButton from '@/components/MailButton.tsx'

const {Title, Paragraph, Text} = Typography

const contactInfo: ContactInfo[] = [
  {
    label: 'Werklocatie',
    value: 'Momenteel werkzoekend',
    icon: <EnvironmentOutlined style={{color: '#0ea5e9', fontSize: 20}} />,
  },
  {
    label: 'Email',
    value: 'reinoutvanderwulp@gmail.com',
    icon: <MailOutlined style={{color: '#0ea5e9', fontSize: 20}} />,
  },
  {label: 'Telefoon', value: '+32 467 33 77 84', icon: <PhoneOutlined style={{color: '#0ea5e9', fontSize: 20}} />},
]

const Contact: FunctionComponent = () => (
  <div>
    <Text type="secondary" style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
      Neem contact op
    </Text>
    <Title level={2} style={{marginTop: 8, marginBottom: 8}}>
      Laten we samenwerken
    </Title>
    <Paragraph type="secondary" style={{fontSize: 16, maxWidth: 480, marginBottom: 40}}>
      Ik kom graag met u in contact! Hieronder vindt u mijn gegevens.
    </Paragraph>

    <Row gutter={[32, 32]}>
      <Col xs={24} lg={12}>
        <Card style={{borderRadius: 16}} styles={{body: {padding: 0}}}>
          {contactInfo.map((item, index) => (
            <ContactInfoComponent item={item} key={index} isLast={index === contactInfo.length - 1} />
          ))}
        </Card>

        <div style={{marginTop: 24}}>
          <MailButton />
        </div>
      </Col>
    </Row>
  </div>
)

export default Contact
