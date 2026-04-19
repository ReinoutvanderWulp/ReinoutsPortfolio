import type {FunctionComponent} from 'react'
import {Steps, Typography} from 'antd'

const {Paragraph, Text} = Typography

const StepsComponent: FunctionComponent = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: (
          <Text strong style={{fontSize: 15}}>
            Bachelor Toegepaste Informatica — Application Development
          </Text>
        ),
        subTitle: <Text type="secondary">2021 – 2023 (niet afgemaakt)</Text>,
        description: (
          <div style={{paddingBottom: 16}}>
            <Text type="secondary" style={{display: 'block', marginBottom: 6}}>
              Thomas More Geel, BE
            </Text>
            <Paragraph type="secondary" style={{marginBottom: 0}}>
              Focuste op web development en web-application development. Daarnaast leerde ik softskills, basis
              networking, IoT en Linux kennen.
            </Paragraph>
          </div>
        ),
      },
      {
        title: (
          <Text strong style={{fontSize: 15, color: '#0ea5e9'}}>
            Graduaat Programmeren (afgestudeerd met onderscheiding)
          </Text>
        ),
        subTitle: <Text type="secondary">2023 – 2026</Text>,
        description: (
          <div style={{paddingBottom: 16}}>
            <Text type="secondary" style={{display: 'block', marginBottom: 6}}>
              Thomas More Turnhout, BE
            </Text>
            <Paragraph type="secondary" style={{marginBottom: 0}}>
              Verbeterde mijn webdeveloper- en programmeerskills. Sloot de opleiding af met een stage bij CMC Online in
              Dessel, waar ik een formbuilder voor het klantenportaal ontwikkelde in React.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)

export default StepsComponent
