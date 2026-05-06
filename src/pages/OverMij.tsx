import type {CSSProperties, FunctionComponent} from 'react'
import {Avatar, Col, Divider, Row, Space, Typography} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import DownloadButton from '@/components/DownloadButton.tsx'
import StepsComponent from '@/components/StepsComponent.tsx'
import SkillLists from '@/components/SkillLists.tsx'

const {Title, Paragraph, Text} = Typography

const containerStyle: CSSProperties = {
  overflowX: 'hidden',
}

const labelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}

const titleStyle: CSSProperties = {
  margin: 0,
  fontWeight: 700,
}

const paragraphStyle: CSSProperties = {
  fontSize: 16,
  marginBottom: 0,
}

const avatarColStyle: CSSProperties = {
  textAlign: 'center',
}

const avatarStyle: CSSProperties = {
  border: '4px solid #0ea5e9',
}

const dividerStyle: CSSProperties = {
  margin: '40px 0',
}

const skillsTitleStyle: CSSProperties = {
  marginTop: 8,
  marginBottom: 24,
  fontWeight: 700,
}

const downloadWrapperStyle: CSSProperties = {
  marginTop: 28,
}

const OverMij: FunctionComponent = () => (
  <div style={containerStyle}>
    <Row align="top" gutter={[48, 32]}>
      <Col xs={24} md={16}>
        <Space direction="vertical" size={16}>
          <Text type="secondary" style={labelStyle}>
            Over mij
          </Text>
          <Title level={2} style={titleStyle}>
            Afgestudeerd programmeur
          </Title>
          <Paragraph type="secondary" style={paragraphStyle}>
            Mijn naam is Reinout van der Wulp en ik ben 22 jaar oud. Ik woon in Beerse. Mijn fascinatie voor IT is in de
            loop der jaren sterk gegroeid. Op de middelbare school kwam ik voor het eerst in aanraking met Java, HTML en
            PHP. De overstap naar Thomas More in Geel was daarna een logische keuze. Later ben ik overgestapt naar het
            graduaat Programmeren in Turnhout. Naast IT hou ik van reizen, lezen, muziek en films. In de toekomst wil ik
            graag aan de slag als frontend of full-stack developer met React of C#/.NET.
          </Paragraph>
          <DownloadButton
            fileName="ReinoutvdW-CV.pdf"
            fileUrl="/documents/ReinoutvdW-CV.pdf"
            buttonText="Download CV"
          />
        </Space>
      </Col>

      <Col xs={0} md={8} style={avatarColStyle}>
        <Avatar size={180} src="/images/Reinout.png" icon={<UserOutlined />} style={avatarStyle} />
      </Col>
    </Row>

    <Divider style={dividerStyle} />

    <Title level={3} style={skillsTitleStyle}>
      Skills & interesses
    </Title>
    <SkillLists />

    <Divider style={dividerStyle} />

    <Title level={3} style={skillsTitleStyle}>
      Mijn opleidingen
    </Title>
    <StepsComponent />

    <div style={downloadWrapperStyle}>
      <DownloadButton fileName="Eindverslag" fileUrl="/documents/eindverslag.docx" buttonText="Download eindverslag" />
    </div>
  </div>
)

export default OverMij
