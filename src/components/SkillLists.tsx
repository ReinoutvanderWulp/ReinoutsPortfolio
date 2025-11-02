import type {FunctionComponent} from 'react'
import {Col, Row, Typography} from 'antd'
import {facts, hardSkills, softSkills} from '@/data/overMij.tsx'
import IconComponent from '@/components/IconComponent.tsx'
import StarComponent from '@/components/StarComponent.tsx'

const {Title} = Typography

const SkillLists: FunctionComponent = () => {
  return (
    <div>
      <Typography>
        <Title level={5}>Weetjes over mij:</Title>
      </Typography>
      <Row gutter={[86, 86]} justify="center">
        <Col xs={24} lg={12}>
          {facts.map((item, index) => (
            <IconComponent icon={item.icon} data={item.data} key={index} />
          ))}
        </Col>
      </Row>
      <Typography>
        <Title level={5}>Mijn Hard Skills:</Title>
      </Typography>
      <Row gutter={[86, 86]} justify="center">
        <Col xs={24} lg={12}>
          {hardSkills.map((item, index) => (
            <StarComponent rate={item.rate} text={item.text} key={index} />
          ))}
        </Col>
      </Row>
      <Typography>
        <Title level={5}>Mijn Soft Skills:</Title>
      </Typography>
      <Row gutter={[86, 86]} justify="center">
        <Col xs={24} lg={12}>
          {softSkills.map((item, index) => (
            <IconComponent icon={item.icon} data={item.data} key={index} />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default SkillLists
