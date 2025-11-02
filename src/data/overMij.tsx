import type {CSSProperties} from 'react'
import type {HardSkills, Info} from '@/interfaces/Info.ts'
import {CheckOutlined, RightOutlined} from '@ant-design/icons'

const iconStyle: CSSProperties = {
  color: '#1677ff',
}

export const facts: Info[] = [
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Geboortedatum: 8 Juli 2003',
  },
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Leeftijd: 22',
  },
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Email: Reinoutvanderwulp@gmail.com',
  },
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Opleiding: Graduaat (lopende)',
  },
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Woonplaats: Beerse, BE',
  },
  {
    icon: <RightOutlined style={iconStyle} />,
    data: 'Werkstatus: Niet-werkend',
  },
]

export const softSkills: Info[] = [
  {
    icon: <CheckOutlined style={iconStyle} />,
    data: 'Hardwerkend',
  },
  {
    icon: <CheckOutlined style={iconStyle} />,
    data: 'Gemotiveerd',
  },
  {
    icon: <CheckOutlined style={iconStyle} />,
    data: 'Behulpzaam',
  },
  {
    icon: <CheckOutlined style={iconStyle} />,
    data: 'Nauwkeurig',
  },
]

export const hardSkills: HardSkills[] = [
  {
    rate: 4,
    text: 'React: ',
  },
  {
    rate: 4,
    text: 'JavaScript / TypeScript: ',
  },
  {
    rate: 5,
    text: 'CSS: ',
  },
  {
    rate: 5,
    text: 'HTML: ',
  },
  {
    rate: 3,
    text: 'C#: ',
  },
  {
    rate: 4,
    text: 'Analyse: ',
  },
]
