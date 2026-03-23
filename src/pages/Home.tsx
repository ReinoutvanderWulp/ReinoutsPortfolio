import type {FunctionComponent} from 'react'
import HeroSection from '@/components/HeroSection.tsx'
import {Col, Row} from 'antd'
import type {HomeData} from '@/interfaces/HomeData.ts'
import CardComponent from '@/components/CardComponent.tsx'

const homeCards: HomeData[] = [
  {
    title: 'Meer weten over mij?',
    url: '/overmij',
    pageName: 'Over Mij',
  },
  {
    title: 'Benieuwd naar mijn projecten?',
    url: '/mijnprojecten',
    pageName: 'Mijn Projecten',
  },
  {
    title: 'Contact opnemen met mij?',
    url: '/contact',
    pageName: 'Contact',
  },
]

const Home: FunctionComponent = () => {
  return (
    <div style={{maxWidth: 1200, margin: '0 auto', padding: '24px'}}>
      <HeroSection />
      <Row gutter={[24, 24]} justify="center" style={{marginTop: '40'}}>
        {homeCards.map((item, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <CardComponent title={item.title} url={item.url} pageName={item.pageName} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
