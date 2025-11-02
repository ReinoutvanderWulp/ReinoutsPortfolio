import type {CSSProperties, FunctionComponent} from 'react'
import {Carousel, Image} from 'antd'

const carouselStyle: CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

interface ImgCarouselProps {
  img1: string
  img2: string
}

const ImgCarousel: FunctionComponent<ImgCarouselProps> = ({img1, img2}) => {
  return (
    <Carousel autoplay={{dotDuration: true}} autoplaySpeed={5000}>
      <div>
        <Image width={200} src={img1} />
        <h3 style={carouselStyle}>1</h3>
      </div>
      <div>
        <Image width={200} src={img2} />
        <h3 style={carouselStyle}>2</h3>
      </div>
    </Carousel>
  )
}

export default ImgCarousel
