import type {FunctionComponent} from 'react'
import {useState, createContext} from 'react'
import {ConfigProvider, Layout, theme as antTheme} from 'antd'
import Navigation from '@/routing/Navigation.tsx'
import Routing from '@/routing/Routing.tsx'
import FooterComponent from '@/components/FooterComponent.tsx'

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
  const isDark = theme === 'dark'

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#0ea5e9',
          borderRadius: 10,
          fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        },
        components: {
          Layout: {
            headerBg: isDark ? 'rgba(15,23,42,0.85)' : 'rgba(255,255,255,0.85)',
            bodyBg: isDark ? '#0f172a' : '#f8fafc',
          },
        },
      }}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Layout style={{minHeight: '100vh'}}>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 100,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0',
              padding: '0 24px',
            }}>
            <Navigation />
          </Header>

          <Content style={{padding: '48px 24px'}}>
            <div
              style={{
                maxWidth: 1100,
                margin: '0 auto',
                borderRadius: 20,
                background: isDark ? '#1e293b' : '#ffffff',
                border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0',
                padding: '48px 56px',
                boxShadow: isDark ? '0 24px 48px rgba(0,0,0,0.4)' : '0 4px 24px rgba(0,0,0,0.06)',
              }}>
              <Routing />
            </div>
          </Content>

          <Footer style={{textAlign: 'center', background: 'transparent', padding: 24}}>
            <FooterComponent />
          </Footer>
        </Layout>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default LayoutComponent
