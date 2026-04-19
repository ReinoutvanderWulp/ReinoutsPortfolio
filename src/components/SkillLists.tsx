import type {FunctionComponent} from 'react'
import {Col, Divider, Row, Typography} from 'antd'
import {facts, hardSkills, softSkills} from '@/data/overMij.tsx'
import IconComponent from '@/components/IconComponent.tsx'
import StarComponent from '@/components/StarComponent.tsx'

const {Text} = Typography

const sectionLabel = (label: string) => (
  <Text
    type="secondary"
    style={{
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: 8,
    }}>
    {label}
  </Text>
)

const SkillLists: FunctionComponent = () => (
  <div>
    {sectionLabel('Weetjes over mij')}
    <Row gutter={[24, 0]}>
      <Col xs={24} lg={16}>
        {facts.map((item, i) => (
          <IconComponent icon={item.icon} data={item.data} key={i} />
        ))}
      </Col>
    </Row>

    <Divider style={{margin: '24px 0'}} />

    {sectionLabel('Hard skills')}
    <Row gutter={[24, 0]}>
      <Col xs={24} lg={16}>
        {hardSkills.map((item, i) => (
          <StarComponent rate={item.rate} text={item.text} key={i} />
        ))}
      </Col>
    </Row>

    <Divider style={{margin: '24px 0'}} />

    {sectionLabel('Soft skills')}
    <Row gutter={[24, 0]}>
      <Col xs={24} lg={16}>
        {softSkills.map((item, i) => (
          <IconComponent icon={item.icon} data={item.data} key={i} />
        ))}
      </Col>
    </Row>
  </div>
)

export default SkillLists
