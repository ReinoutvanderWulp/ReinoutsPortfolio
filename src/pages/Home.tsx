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
    title: 'Contact opnemem met mij?',
    url: '/contact',
    pageName: 'Contact',
  },
]

const Home: FunctionComponent = () => {
  return (
    <div>
      <HeroSection />
      <Row gutter={[32, 32]} style={{padding: 6}}>
        {homeCards.map((item, index) => (
          <Col xs={24} lg={8} key={index}>
            <CardComponent title={item.title} url={item.url} pageName={item.pageName} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
