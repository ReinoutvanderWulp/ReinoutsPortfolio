import type {CSSProperties, FunctionComponent} from 'react'
import {Image, Typography} from 'antd'
import DownloadButton from '@/components/DownloadButton.tsx'
import StepsComponent from '@/components/StepsComponent.tsx'
import SkillLists from '@/components/SkillLists.tsx'

const {Title, Paragraph} = Typography

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
          <Title level={4}>Afgestudeerd Programmeur</Title>
        </Typography>
      </div>
      <div>
        <Typography>
          <Paragraph>
            Mijn naam is Reinout van der Wulp en ik ben 22 jaar oud. Ik woon in Beerse. Mijn fascinatie voor IT is in
            de loop der jaren sterk gegroeid. Op de middelbare school kwam ik voor het eerst in aanraking met Java, HTML
            en PHP. De overstap naar Thomas More in Geel was daarna een logische keuze. Daar studeerde ik eerst
            Application Development (APP). Later ben ik overgestapt naar het graduaat Programmeren in Turnhout. Naast
            IT hou ik van reizen en lezen. Ook luister ik graag naar muziek en kijk ik graag films. Daarnaast ben ik
            fan van het Eurovisiesongfestival en de Efteling. In de toekomst zou ik graag aan de slag gaan als
            webdeveloper of frontend developer, bij voorkeur met React of C#. Ik zoek een leuke werkomgeving met een
            goede werksfeer waar ik mezelf verder kan ontwikkelen. Wil je meer weten over mij en mijn realisaties?
            Bekijk dan mijn projecten of download hieronder mijn cv.
          </Paragraph>
        </Typography>
        <DownloadButton fileName="ReinoutvdW-CV.pdf" fileUrl="/documents/ReinoutvdW-CV.pdf" buttonText="Download CV" />
        <SkillLists />
      </div>
      <div>
        <Typography>
          <Title level={4}>Mijn Opleidingen:</Title>
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
