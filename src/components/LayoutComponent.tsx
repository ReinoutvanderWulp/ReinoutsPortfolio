import type {CSSProperties, FunctionComponent} from 'react'
import {createContext, useState} from 'react'
import {ConfigProvider, FloatButton, Layout, theme as antTheme} from 'antd'
import {MoonOutlined, SunOutlined, VerticalAlignTopOutlined} from '@ant-design/icons'
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

const contentPadding: CSSProperties = {
  padding: '48px 24px',
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  padding: 24,
}

const backTopStyle: CSSProperties = {
  bottom: 32,
  right: 32,
}

const toggleButtonStyle: CSSProperties = {
  position: 'static',
  width: 36,
  height: 36,
  boxShadow: 'none',
  flexShrink: 0,
}

const getHeaderStyle = (isDark: boolean): CSSProperties => ({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: isDark ? '1px solid #1e293b' : '1px solid #e2e8f0',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

const getContentWrapperStyle = (isDark: boolean): CSSProperties => ({
  maxWidth: 1100,
  margin: '0 auto',
  borderRadius: 20,
  background: isDark ? '#1e293b' : '#ffffff',
  border: isDark ? '1px solid #2d3f55' : '1px solid #e2e8f0',
  padding: '48px 56px',
  boxShadow: isDark ? '0 24px 48px #0a0f1a' : '0 4px 24px #e8edf5',
})

const getThemeConfig = (isDark: boolean) => ({
  algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
  token: {
    colorPrimary: '#0ea5e9',
    borderRadius: 10,
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  components: {
    Layout: {
      headerBg: isDark ? '#161f2e' : '#ffffff',
      bodyBg: isDark ? '#0f172a' : '#f8fafc',
    },
  },
})

const LayoutComponent: FunctionComponent = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const isDark = theme === 'dark'

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ConfigProvider theme={getThemeConfig(isDark)}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Layout style={{minHeight: '100vh'}}>
          <Header style={getHeaderStyle(isDark)}>
            <Navigation />
            <FloatButton
              icon={isDark ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              tooltip={isDark ? 'Licht thema' : 'Donker thema'}
              style={toggleButtonStyle}
            />
          </Header>

          <Content style={contentPadding}>
            <div style={getContentWrapperStyle(isDark)}>
              <Routing />
            </div>
          </Content>

          <Footer style={footerStyle}>
            <FooterComponent />
          </Footer>
        </Layout>

        <FloatButton.BackTop
          visibilityHeight={100}
          style={backTopStyle}
          icon={<VerticalAlignTopOutlined />}
          tooltip="Terug naar boven"
        />
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default LayoutComponent
