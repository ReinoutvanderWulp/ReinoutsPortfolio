import type {CSSProperties, FunctionComponent} from 'react'
import {useState} from 'react'
import {ConfigProvider, Layout, theme as antTheme} from 'antd'
import Navigation from '@/routing/Navigation.tsx'
import Routing from '@/routing/Routing.tsx'
import FooterComponent from '@/components/FooterComponent.tsx'
import {createContext} from 'react'

const {Header, Content, Footer} = Layout

interface ContextProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'light',
  toggleTheme: () => {},
})

const LayoutComponent: FunctionComponent = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
  }

  const algorithm = theme === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm

  const layoutStyle: CSSProperties = {
    margin: '8px',
    backgroundColor: theme === 'dark' ? '#141414' : '#f0f2f5',
  }

  const headerStyle: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: theme === 'dark' ? '#1f1f1f' : 'white',
  }

  const contentStyle: CSSProperties = {
    textAlign: 'center',
    backgroundColor: theme === 'dark' ? '#001529' : 'white',
    color: theme === 'dark' ? 'white' : 'inherit',
  }

  const footerStyle: CSSProperties = {
    textAlign: 'center',
    backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f0f0f0',
    color: theme === 'dark' ? '#ffffff' : 'inherit',
  }

  return (
    <ConfigProvider theme={{algorithm: algorithm}}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Navigation />
          </Header>
          <Content style={contentStyle}>
            <Routing />
          </Content>
          <Footer style={footerStyle}>
            <FooterComponent />
          </Footer>
        </Layout>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default LayoutComponent
