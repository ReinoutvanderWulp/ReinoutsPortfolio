import type {FunctionComponent} from 'react'
import {Avatar, Button, Col, Divider, Row, Space, Typography} from 'antd'
import {DownloadOutlined, UserOutlined} from '@ant-design/icons'
import StepsComponent from '@/components/StepsComponent.tsx'
import SkillLists from '@/components/SkillLists.tsx'

const {Title, Paragraph, Text} = Typography

const OverMij: FunctionComponent = () => (
  <div style={{overflowX: 'hidden'}}>
    <Row align="top" gutter={[48, 32]}>
      <Col xs={24} md={16}>
        <Space direction="vertical" size={16}>
          <Text
            type="secondary"
            style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
            Over mij
          </Text>
          <Title level={2} style={{margin: 0, fontWeight: 700}}>
            Afgestudeerd programmeur
          </Title>
          <Paragraph style={{fontSize: 16, marginBottom: 0}} type="secondary">
            Mijn naam is Reinout van der Wulp en ik ben 22 jaar oud. Ik woon in Beerse. Mijn fascinatie voor IT is in de
            loop der jaren sterk gegroeid. Op de middelbare school kwam ik voor het eerst in aanraking met Java, HTML en
            PHP. De overstap naar Thomas More in Geel was daarna een logische keuze. Later ben ik overgestapt naar het
            graduaat Programmeren in Turnhout. Naast IT hou ik van reizen, lezen, muziek en films. In de toekomst wil ik
            graag aan de slag als frontend developer met React of C#.
          </Paragraph>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href="/documents/ReinoutvdW-CV.pdf"
            download="ReinoutvdW-CV.pdf"
            style={{borderRadius: 10, fontWeight: 600, width: 'fit-content'}}>
            Download CV
          </Button>
        </Space>
      </Col>

      <Col xs={0} md={8} style={{textAlign: 'center'}}>
        <Avatar
          size={180}
          src="/images/Reinout.png"
          icon={<UserOutlined />}
          style={{border: '4px solid #0ea5e9', boxShadow: '0 0 0 6px #e0f2fe'}}
        />
      </Col>
    </Row>

    <Divider style={{margin: '40px 0'}} />

    <Text type="secondary" style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
      Vaardigheden
    </Text>
    <Title level={3} style={{marginTop: 8, marginBottom: 24, fontWeight: 700}}>
      Skills & interesses
    </Title>
    <SkillLists />

    <Divider style={{margin: '40px 0'}} />

    <Text type="secondary" style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
      Achtergrond
    </Text>
    <Title level={3} style={{marginTop: 8, marginBottom: 24, fontWeight: 700}}>
      Mijn opleidingen
    </Title>
    <StepsComponent />

    <div style={{marginTop: 28}}>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        href="/documents/eindverslag.docx"
        download="Eindverslag"
        style={{borderRadius: 10, fontWeight: 600}}>
        Download eindverslag
      </Button>
    </div>
  </div>
)

export default OverMij
