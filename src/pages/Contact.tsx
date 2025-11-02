import type {CSSProperties, FunctionComponent} from 'react'
import {Typography} from 'antd'
import type {ContactInfo} from '@/interfaces/ContactInfo.ts'
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons'
import ContactInfoComponent from '@/components/ContactInfoComponent.tsx'
import ContactForm from '@/components/ContactForm.tsx'

const {Paragraph, Title} = Typography

const iconStyle: CSSProperties = {
  color: '#1677ff',
  fontSize: '24px',
}

const contactInfo: ContactInfo[] = [
  {
    label: 'Studielocatie:',
    value: 'Campus Blairon 800, 2300 Turnhout',
    icon: <EnvironmentOutlined style={iconStyle} />,
  },
  {
    label: 'Email:',
    value: 'reinoutvanderwulp@gmail.com',
    icon: <MailOutlined style={iconStyle} />,
  },
  {
    label: 'Telefoon:',
    value: '+32 467 33 77 84',
    icon: <PhoneOutlined style={iconStyle} />,
  },
]

const Contact: FunctionComponent = () => {
  return (
    <div>
      <div>
        <Typography>
          <Title level={2}>Contact</Title>
          <Paragraph>
            Ik kom graag met u in contact! Hieronder vind u mijn gegevens, of neem contact op via het formulier.
          </Paragraph>
        </Typography>
      </div>
      <div>
        <div>
          {contactInfo.map((item, index) => (
            <ContactInfoComponent item={item} key={index} />
          ))}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
