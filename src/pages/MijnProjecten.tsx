import type {CSSProperties, FunctionComponent} from 'react'
import {useState} from 'react'
import {Col, Divider, Row, Typography} from 'antd'
import {projects} from '../data/projects.ts'
import CardComponent from '@/components/CardComponent.tsx'
import SelectComponent from '@/components/SelectComponent.tsx'
import type {Project} from '@/interfaces/Project.ts'

const {Title, Text} = Typography

const labelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}

const headerRowStyle: CSSProperties = {
  marginTop: 8,
}

const titleStyle: CSSProperties = {
  margin: 0,
}

const dividerStyle: CSSProperties = {
  margin: '24px 0 32px',
}

const colStyle: CSSProperties = {
  display: 'flex',
}

const options = ['Toon Alles', ...projects.map(p => p.title)]

const MijnProjecten: FunctionComponent = () => {
  const [displayData, setDisplayData] = useState<Project[]>(projects)

  const onSelectChange = (value: string) => {
    setDisplayData(value === 'Toon Alles' ? projects : projects.filter(p => p.title === value))
  }

  return (
    <div>
      <Text type="secondary" style={labelStyle}>
        Portfolio
      </Text>
      <Row align="middle" justify="space-between" style={headerRowStyle}>
        <Col>
          <Title level={2} style={titleStyle}>
            Mijn projecten
          </Title>
        </Col>
        <Col>
          <SelectComponent data={options} onChange={onSelectChange} />
        </Col>
      </Row>

      <Divider style={dividerStyle} />

      <Row gutter={[24, 24]}>
        {displayData.map((project, index) => (
          <Col xs={24} lg={12} key={index} style={colStyle}>
            <CardComponent
              src={project.src}
              title={project.title}
              url={`${project.url}${project.id}`}
              pageName="Details bekijken"
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MijnProjecten
