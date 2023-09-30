import Header from '@components/header'
import './main-layout.scss'
import Home from '../../modules/Home'

const MainLayout = () => {
   return (
      <div className="wrapper">
         <Header />

         <div className="main">
            <Home />
         </div>
      </div>
   )
}

export default MainLayout
