import type {CSSProperties, FunctionComponent} from 'react'
import {Image, Typography} from 'antd'
import DownloadButton from '@/components/DownloadButton.tsx'
import StepsComponent from '@/components/StepsComponent.tsx'
import SkillLists from '@/components/SkillLists.tsx'

const {Title, Paragraph, Text} = Typography

const containerStyle: CSSProperties = {
  overflowX: 'hidden',
}

const OverMij: FunctionComponent = () => {
  return (
    <div style={containerStyle}>
      <div>
        <Typography>
          <Title level={2}>Over Mij</Title>
          <Image src="/images/Reinout.png" width="30%" preview={false} />
          <Title level={4}>Student Graduaat Programmeren</Title>
          <Text>
            Op dit ogenblik ben ik student aan Thomas More in Turnhout, waar ik het Graduaat Programmeren studeer. Kijk
            onder de feitjes en skills voor een uitgebreidere uitleg.
          </Text>
        </Typography>
      </div>
      <SkillLists />
      <div>
        <Typography>
          <Paragraph>
            Mijn naam is Reinout van der Wulp. Ik ben 22 jaar. Ik woon in Beerse. Mijn fascinatie voor ICT is in de loop
            van de jaren gegroeid. Op de middelbare school kwam ik voor het eerst in aanraking met JAVA, HTML, PHP, etc.
            Hierna was de overstap naar Thomas More Geel meer dan logisch. Aan Thomas More Geel studeerde ik eerst
            Application Development, kortweg APP. Later ben ik overgestapt naar het Graduaat Programmeren in Turnhout.
            Naast ICT ben ik graag bezig met reizen, tuinieren, lezen, luister ik graag muziek, kijk ik graag films en
            ben ik fan van het songfestival. In de toekomst zou ik graag als webdeveloper of frontend developer in React
            werken, bij een leuk bedrijf met een goede werksfeer. Meer weten over mij en mijn realisaties? Kijk dan
            verder bij "Mijn Projecten" of download hieronder mijn CV.
          </Paragraph>
          <Title level={4}>Opleidingen en CV</Title>
          <Paragraph>Wilt u mijn CV downloaden? Dat kan via onderstaande link:</Paragraph>
        </Typography>
        <DownloadButton fileName="ReinoutvdW-CV.pdf" fileUrl="/documents/ReinoutvdW-CV.pdf" buttonText="Download CV" />
      </div>
      <div>
        <Typography>
          <Title level={4}>Mijn Hogeschool Opleidingen:</Title>
        </Typography>
        <StepsComponent />
        <DownloadButton
          fileName="Eindverslag"
          fileUrl="/documents/eindverslag.docx"
          buttonText="Download Eindverslag"
        />
      </div>
    </div>
  )
}

export default OverMij
