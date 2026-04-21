import type {FunctionComponent} from 'react'
import {useContext} from 'react'
import type {MenuProps} from 'antd'
import {Menu} from 'antd'
import {Link, useLocation} from 'react-router'
import {CodeFilled, HomeFilled, MailOutlined, UserOutlined} from '@ant-design/icons'
import {ThemeContext} from '@/components/LayoutComponent.tsx'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: <Link to="/home">Home</Link>,
    key: '/home',
    icon: <HomeFilled />,
  },
  {
    label: <Link to="/overmij">Over Mij</Link>,
    key: '/overmij',
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/mijnprojecten">Mijn Projecten</Link>,
    key: '/mijnprojecten',
    icon: <CodeFilled />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: '/contact',
    icon: <MailOutlined />,
  },
]

const Navigation: FunctionComponent = () => {
  const {theme} = useContext(ThemeContext)
  const location = useLocation()

  const getSelectedKey = (pathname: string): string => {
    if (items.find(item => item?.key === pathname)) return pathname
    if (pathname.startsWith('/mijnprojecten')) return '/mijnprojecten'
    return '/home'
  }

  return (
    <Menu
      selectedKeys={[getSelectedKey(location.pathname)]}
      mode="horizontal"
      items={items}
      theme={theme === 'dark' ? 'dark' : 'light'}
      style={{flex: 1, border: 'none', background: 'transparent'}}
    />
  )
}

export default Navigation
