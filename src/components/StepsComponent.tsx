import type {CSSProperties, FunctionComponent} from 'react'
import {Steps, Typography} from 'antd'

const {Paragraph, Text} = Typography

const titleStyle: CSSProperties = {
  fontSize: 15,
}

const activeTitleStyle: CSSProperties = {
  fontSize: 15,
  color: '#0ea5e9',
}

const schoolStyle: CSSProperties = {
  display: 'block',
  marginBottom: 6,
}

const descriptionWrapperStyle: CSSProperties = {
  paddingBottom: 16,
}

const paragraphStyle: CSSProperties = {
  marginBottom: 0,
}

const StepsComponent: FunctionComponent = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: (
          <Text strong style={titleStyle}>
            Bachelor Toegepaste Informatica — Application Development
          </Text>
        ),
        subTitle: <Text type="secondary">2021 – 2023 (niet afgemaakt)</Text>,
        description: (
          <div style={descriptionWrapperStyle}>
            <Text type="secondary" style={schoolStyle}>
              Thomas More Geel, BE
            </Text>
            <Paragraph type="secondary" style={paragraphStyle}>
              Focuste op web development en web-application development. Daarnaast leerde ik softskills, basis
              networking, IoT en Linux kennen.
            </Paragraph>
          </div>
        ),
      },
      {
        title: (
          <Text strong style={activeTitleStyle}>
            Graduaat Programmeren (afgestudeerd met onderscheiding)
          </Text>
        ),
        subTitle: <Text type="secondary">2023 – 2026</Text>,
        description: (
          <div style={descriptionWrapperStyle}>
            <Text type="secondary" style={schoolStyle}>
              Thomas More Turnhout, BE
            </Text>
            <Paragraph type="secondary" style={paragraphStyle}>
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
