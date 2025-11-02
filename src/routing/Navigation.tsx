import type {CSSProperties, FunctionComponent} from 'react'
import type {MenuProps} from 'antd'
import {Menu} from 'antd'
import {Link, useLocation} from 'react-router'
import {CodeFilled, HomeFilled, MailOutlined, UserOutlined} from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

const iconStyle: CSSProperties = {
  color: '#1677ff',
}

const items: MenuItem[] = [
  {
    label: <Link to="/home">Home</Link>,
    key: '/home',
    icon: <HomeFilled style={iconStyle} />,
  },
  {
    label: <Link to="/overmij">Over Mij</Link>,
    key: '/overmij',
    icon: <UserOutlined style={iconStyle} />,
  },
  {
    label: <Link to="/mijnprojecten">Mijn Projecten</Link>,
    key: '/mijnprojecten',
    icon: <CodeFilled style={iconStyle} />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: '/contact',
    icon: <MailOutlined style={iconStyle} />,
  },
]

const Navigation: FunctionComponent = () => {
  const location = useLocation()

  const getSelectedKey = (pathname: string): string => {
    const foundItem = items.find(item => item?.key === pathname)
    if (foundItem) {
      return pathname
    }

    if (pathname.startsWith('/mijnprojecten')) {
      return '/mijnprojecten'
    }

    return '/home'
  }

  const selectedKey = getSelectedKey(location.pathname)

  return <Menu selectedKeys={[selectedKey]} mode="horizontal" items={items} theme="light" />
}

export default Navigation
