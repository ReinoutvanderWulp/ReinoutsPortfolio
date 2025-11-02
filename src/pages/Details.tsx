import type {CSSProperties, FunctionComponent} from 'react'
import {Typography} from 'antd'
import {useParams} from 'react-router'
import {projectDetails} from '../data/projects.ts'
import ImgCarousel from '@/components/ImgCarousel.tsx'

const {Title, Paragraph, Text} = Typography

const textStyle: CSSProperties = {
  color: '#1677ff',
}

const Details: FunctionComponent = () => {
  const {detailId} = useParams()
  const detail = projectDetails.find(project => project.id === Number(detailId))

  if (!detail) {
    return <div>Het project werd niet gevonden!</div>
  }

  return (
    <div>
      <div>
        <Typography>
          <Title level={2}>Details {detail.vak}</Title>
        </Typography>
      </div>
      <div>
        <ImgCarousel img1={detail.image1} img2={detail.image2} />
      </div>
      <div>
        <Typography>
          <Text style={textStyle}>{detail.datum}</Text>
          <Title level={4}>{detail.detailTitle}</Title>
          <Paragraph>{detail.description}</Paragraph>
        </Typography>
      </div>
    </div>
  )
}

export default Details
