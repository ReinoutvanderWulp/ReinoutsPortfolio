import type { FunctionComponent } from 'react'
import { Breadcrumb, Tag, Typography } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router'
import { projectDetails } from '../data/projects.ts'
import ImgCarousel from '@/components/ImgCarousel.tsx'

const { Title, Paragraph } = Typography

const Details: FunctionComponent = () => {
  const { detailId } = useParams()
  const navigate = useNavigate()
  const detail = projectDetails.find(p => p.id === Number(detailId))

  if (!detail) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <Title level={3} type="secondary">Project niet gevonden.</Title>
      </div>
    )
  }

  return (
    <div>
      <Breadcrumb
        style={{ marginBottom: 32 }}
        items={[
          { title: <HomeOutlined />, onClick: () => navigate('/'), style: { cursor: 'pointer' } },
          { title: 'Mijn projecten', onClick: () => navigate('/mijnprojecten'), style: { cursor: 'pointer' } },
          { title: detail.detailTitle },
        ]}
      />

      <Tag color="blue" style={{ borderRadius: 100, padding: '2px 12px', marginBottom: 12, fontWeight: 600 }}>
        {detail.vak}
      </Tag>

      <Title level={2} style={{ marginTop: 4, marginBottom: 8, fontWeight: 700 }}>
        {detail.detailTitle}
      </Title>

      <Tag style={{ marginBottom: 32, borderRadius: 100 }}>{detail.datum}</Tag>

      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: 40 }}>
        <ImgCarousel img1={detail.image1} img2={detail.image2} />
      </div>

      <Paragraph style={{ fontSize: 16, color: '#475569', lineHeight: 1.8 }}>
        {detail.description}
      </Paragraph>
    </div>
  )
}

export default Details
