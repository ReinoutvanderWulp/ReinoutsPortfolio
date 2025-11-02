import type {CSSProperties, FunctionComponent} from 'react'
import {Steps, Typography} from 'antd'

const {Paragraph, Text, Title} = Typography

const textStyle: CSSProperties = {
  color: '#1677ff',
}

const StepsComponent: FunctionComponent = () => {
  return (
    <Steps
      direction="vertical"
      current={1}
      items={[
        {
          title: (
            <Typography>
              <Title level={5} style={textStyle}>
                Bachelor Toegepaste Informatica, specialisatie Application Development
              </Title>
            </Typography>
          ),
          description: (
            <Typography>
              <Title level={5}>2021-2023 (Niet Afgemaakt)</Title>
              <Text style={textStyle}>Thomas More Geel, BE</Text>
              <Paragraph>
                Binnen deze opleiding focuste ik mij op web development en web-application development. Daarnaast leerde
                ik binnen de opleiding ook softskills en basis networking en IoT kennen. Ook leerde ik basis kennis van
                Linux en Linux webservices.
              </Paragraph>
            </Typography>
          ),
        },
        {
          title: (
            <Typography>
              <Title level={5} style={textStyle}>
                Graduaat Programmeren
              </Title>
            </Typography>
          ),
          description: (
            <Typography>
              <Title level={5}>2023 - 2025 (lopende)</Title>
              <Text style={textStyle}>Thomas More Turnhout, BE</Text>
              <Paragraph>
                Binnen het Graduaat Programmeren focus ik me op het verbeteren van mijn webdeveloper en programmeer
                skills. Daarnaast verbeter ik ook mijn softskills. De opleiding sluit ik af met een stage bij CMC Online
                in Dessel, waar ik een formbuilder voor het klantenportaal mag ontwikkelen in React. Wilt u meer weten
                over mijn werkplekleren opdracht (zoals de opleiding stage noemt)? Download dan mijn eindrapport en kom
                alles over het project te weten!
              </Paragraph>
            </Typography>
          ),
        },
      ]}
    />
  )
}

export default StepsComponent
