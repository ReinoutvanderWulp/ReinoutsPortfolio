import type {CSSProperties, FunctionComponent} from 'react'
import {Layout} from 'antd'
import Navigation from '@/routing/Navigation.tsx'
import Routing from '@/routing/Routing.tsx'
import FooterComponent from '@/components/FooterComponent.tsx'

const { Header, Content, Footer } = Layout;

const LayoutComponent: FunctionComponent = () => {

  const layoutStyle: CSSProperties = {
    margin: "8px"
  }

  const headerStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "white"
  }

  const contentStyle: CSSProperties = {
    textAlign: "center",
    backgroundColor: "white"
  }

  const footerStyle: CSSProperties = {
    textAlign: "center",
    backgroundColor: "#f0f0f0"
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Navigation/>
      </Header>
      <Content style={contentStyle}>
        <Routing/>
      </Content>
      <Footer style={footerStyle}>
        <FooterComponent/>
      </Footer>
    </Layout>
  )
}

export default LayoutComponent