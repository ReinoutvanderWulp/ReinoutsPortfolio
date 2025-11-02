import type {CSSProperties, FunctionComponent} from 'react'
import {Image, Typography} from 'antd'
import DownloadButton from '@/components/DownloadButton.tsx'

const {Title} = Typography

const titleStyle: CSSProperties = {
  color: '#1677ff',
}

const HeroSection: FunctionComponent = () => {
  return (
    <div>
      <Typography>
        <Title level={1} style={titleStyle}>
          Reinout van der Wulp
        </Title>
        <Image src="/images/Reinout.png" width="20%" preview={false} />
        <Title level={5}>
          Passievolle student Graduaat Programmeren, gespecialiseerd in React en Frontend Development. Klaar voor de
          volgende uitdaging.
        </Title>
        <Title level={5}>Kijk op de andere pagina's voor meer informatie! Of download hieronder meteen mijn CV:</Title>
      </Typography>
      <DownloadButton fileName="ReinoutvdW-CV.pdf" fileUrl="/documents/ReinoutvdW-CV.pdf" buttonText="Download CV" />
    </div>
  )
}

export default HeroSection
