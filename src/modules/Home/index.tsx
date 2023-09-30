import Info from '../../modules/Info'
import Banner from '../../modules/Banner'
import SideMenu from '../../modules/SideMenu'
import SimpleSlider from '../../modules/Slider'
import './home.scss'

const Home = () => {
   return (
      <div className="home">
         <div className="home-section-top">
            <SideMenu />
            <SimpleSlider />
            <Info />
         </div>
         <div>
            <Banner />
         </div>
      </div>
   )
}

export default Home
