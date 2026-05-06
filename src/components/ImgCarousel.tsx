import type {CSSProperties, FunctionComponent} from 'react'
import {Carousel, Image} from 'antd'

interface ImgCarouselProps {
  img1: string
  img2: string
}

const slideWrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f8fafc',
  padding: 32,
  minHeight: 280,
}

const imageStyle: CSSProperties = {
  maxHeight: 320,
  maxWidth: '100%',
  objectFit: 'contain',
  borderRadius: 8,
}

const ImgCarousel: FunctionComponent<ImgCarouselProps> = ({img1, img2}) => (
  <Carousel autoplay autoplaySpeed={3000} dotPosition="bottom">
    {[img1, img2].map((src, i) => (
      <div key={i}>
        <div style={slideWrapperStyle}>
          <Image src={src} preview={false} style={imageStyle} />
        </div>
      </div>
    ))}
  </Carousel>
)

export default ImgCarousel
