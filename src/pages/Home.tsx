import type {FunctionComponent} from 'react'
import {Col, Divider, Row, Typography} from 'antd'
import HeroSection from '@/components/HeroSection.tsx'
import CardComponent from '@/components/CardComponent.tsx'
import type {HomeData} from '@/interfaces/HomeData.ts'

const {Text} = Typography

const homeCards: HomeData[] = [
  {title: 'Meer weten over mij?', url: '/overmij', pageName: 'Over mij'},
  {title: 'Benieuwd naar mijn projecten?', url: '/mijnprojecten', pageName: 'Mijn projecten'},
  {title: 'Contact opnemen met mij?', url: '/contact', pageName: 'Contact'},
]

const Home: FunctionComponent = () => (
  <div>
    <HeroSection />
    <Divider style={{margin: '40px 0 32px'}} />
    <Text type="secondary" style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
      Verken mijn portfolio
    </Text>
    <Row gutter={[20, 20]} style={{marginTop: 20}}>
      {homeCards.map((item, index) => (
        <Col xs={24} sm={12} lg={8} key={index} style={{display: 'flex'}}>
          <CardComponent title={item.title} url={item.url} pageName={item.pageName} />
        </Col>
      ))}
    </Row>
  </div>
)

export default Home
