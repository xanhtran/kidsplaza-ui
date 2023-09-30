import Slider, { CustomArrowProps, Settings } from 'react-slick'
import { sliderImage } from './slider.constants'
import './slider.scss'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SampleNextArrow = (props: CustomArrowProps) => {
   const { className, onClick } = props

   return <div className={`${className} nextArrow`} onClick={onClick} />
}

const SamplePrevArrow = (props: CustomArrowProps) => {
   const { className, onClick } = props

   return <div className={`prevArrow ${className}`} onClick={onClick} />
}

const SimpleSlider = () => {
   const settings: Settings = {
      infinite: true,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
   }

   return (
      <Slider {...settings}>
         {/* {sliderImage.map((item) => {
            return (
               <div key={item.id}>
                  <img src={item.urls} alt="" className="slider__image" />
               </div>
            )
         })} */}
         <div className="block">
            <h3>1</h3>
         </div>
         <div>
            <h3>2</h3>
         </div>
         <div>
            <h3>3</h3>
         </div>
         <div>
            <h3>4</h3>
         </div>
         <div>
            <h3>5</h3>
         </div>
         <div>
            <h3>6</h3>
         </div>
      </Slider>
   )
}

export default SimpleSlider
