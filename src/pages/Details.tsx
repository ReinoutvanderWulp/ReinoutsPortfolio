import type {CSSProperties, FunctionComponent} from 'react'
import {Breadcrumb, Tag, Typography} from 'antd'
import {HomeOutlined} from '@ant-design/icons'
import {useParams, useNavigate} from 'react-router'
import {projectDetails} from '../data/projects.ts'
import ImgCarousel from '@/components/ImgCarousel.tsx'

const {Title, Paragraph} = Typography

const breadcrumbStyle: CSSProperties = {
  marginBottom: 32,
}

const cursorStyle: CSSProperties = {
  cursor: 'pointer',
}

const vakTagStyle: CSSProperties = {
  borderRadius: 100,
  padding: '2px 12px',
  marginBottom: 12,
  fontWeight: 600,
}

const titleStyle: CSSProperties = {
  marginTop: 4,
  marginBottom: 8,
  fontWeight: 700,
}

const datumTagStyle: CSSProperties = {
  marginBottom: 32,
  borderRadius: 100,
}

const carouselWrapperStyle: CSSProperties = {
  borderRadius: 16,
  overflow: 'hidden',
  border: '1px solid #e2e8f0',
  marginBottom: 40,
}

const paragraphStyle: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.8,
}

const notFoundStyle: CSSProperties = {
  textAlign: 'center',
  padding: '64px 0',
}

const Details: FunctionComponent = () => {
  const {detailId} = useParams()
  const navigate = useNavigate()
  const detail = projectDetails.find(p => p.id === Number(detailId))

  if (!detail) {
    return (
      <div style={notFoundStyle}>
        <Title level={3} type="secondary">
          Project niet gevonden.
        </Title>
      </div>
    )
  }

  return (
    <div>
      <Breadcrumb
        style={breadcrumbStyle}
        items={[
          {
            title: (
              <span onClick={() => navigate('/')} style={cursorStyle}>
                <HomeOutlined />
              </span>
            ),
          },
          {
            title: (
              <span onClick={() => navigate('/mijnprojecten')} style={cursorStyle}>
                Mijn projecten
              </span>
            ),
          },
          {title: detail.detailTitle},
        ]}
      />

      <Tag color="blue" style={vakTagStyle}>
        {detail.vak}
      </Tag>

      <Title level={2} style={titleStyle}>
        {detail.detailTitle}
      </Title>

      <Tag style={datumTagStyle}>{detail.datum}</Tag>

      <div style={carouselWrapperStyle}>
        <ImgCarousel img1={detail.image1} img2={detail.image2} />
      </div>

      <Paragraph type="secondary" style={paragraphStyle}>
        {detail.description}
      </Paragraph>
    </div>
  )
}

export default Details
