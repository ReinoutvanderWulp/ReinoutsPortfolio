import type {FunctionComponent} from 'react'
import {useState} from 'react'
import {Typography} from 'antd'
import {projects} from '../data/projects.ts'
import CardComponent from '@/components/CardComponent.tsx'
import SelectComponent from '@/components/SelectComponent.tsx'
import type {Project} from '@/interfaces/Project.ts'

const {Title} = Typography

const MijnProjecten: FunctionComponent = () => {
  const [displayData, setDisplayData] = useState<Project[]>(projects)

  const onSelectChange = (value: string) => {
    if (value === "Toon Alles"){
      setDisplayData(projects)
      return
    }

    const filteredData = projects.filter((project) => project.title === value)

    setDisplayData(filteredData)
  }

  const options: string[] = ["Toon Alles"]
  projects.forEach(project => options.push(project.title))

  return (
    <div>
      <div>
        <Typography>
          <Title level={2}>Mijn Projecten</Title>
        </Typography>
        <SelectComponent data={options} onChange={onSelectChange} />
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center">
        {displayData.map((project, index) => (
          <CardComponent
            src={project.src}
            title={project.title}
            url={`${project.url}${project.id}`}
            pageName="Details Project"
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default MijnProjecten
