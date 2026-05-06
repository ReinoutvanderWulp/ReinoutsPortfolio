import type {CSSProperties, FunctionComponent} from 'react'
import {Col, Divider, Row} from 'antd'
import {facts, hardSkills, softSkills} from '@/data/overMij.tsx'
import IconComponent from '@/components/IconComponent.tsx'
import StarComponent from '@/components/StarComponent.tsx'
import SectionLabel from '@/components/SectionLabel.tsx'

const dividerStyle: CSSProperties = {
  margin: '24px 0',
}

const SkillLists: FunctionComponent = () => (
  <div>
    <SectionLabel label="Weetjes over mij" />
    <Row gutter={[24, 0]}>
      <Col xs={24} lg={16}>
        {facts.map((item, i) => (
          <IconComponent icon={item.icon} data={item.data} key={i} />
        ))}
      </Col>
    </Row>

    <Divider style={dividerStyle} />

    <SectionLabel label="Hard skills" />
    <Row gutter={[24, 0]}>
      <Col xs={24} lg={16}>
        {hardSkills.map((item, i) => (
          <StarComponent rate={item.rate} text={item.text} key={i} />
        ))}
      </Col>
    </Row>

    <Divider style={dividerStyle} />

    <SectionLabel label="Soft skills" />
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
