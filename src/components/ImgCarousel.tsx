import type {FunctionComponent} from 'react'
import {Carousel, Image} from 'antd'

interface ImgCarouselProps {
  img1: string
  img2: string
}

const ImgCarousel: FunctionComponent<ImgCarouselProps> = ({img1, img2}) => (
  <Carousel autoplay autoplaySpeed={3000} dotPosition="bottom">
    {[img1, img2].map((src, i) => (
      <div key={i}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f8fafc',
            padding: 32,
            minHeight: 280,
          }}>
          <Image
            src={src}
            preview={false}
            style={{maxHeight: 320, maxWidth: '100%', objectFit: 'contain', borderRadius: 8}}
          />
        </div>
      </div>
    ))}
  </Carousel>
)

export default ImgCarousel
