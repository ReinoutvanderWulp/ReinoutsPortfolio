import type {FunctionComponent} from 'react'
import {Carousel, Image} from 'antd'

interface ImgCarouselProps {
  img1: string
  img2: string
}

const ImgCarousel: FunctionComponent<ImgCarouselProps> = ({img1, img2}) => {
  return (
    <Carousel autoplay autoplaySpeed={2000}>
      <div>
        <Image width="30%" src={img1} />
      </div>
      <div>
        <Image width="30%" src={img2} />
      </div>
    </Carousel>
  )
}

export default ImgCarousel
