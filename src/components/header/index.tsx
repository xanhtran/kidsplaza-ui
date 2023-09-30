import Input from '@components/input'
import Logo from '@components/logo'
import './header.scss'

const Header = () => {
   return (
      <>
         <div className="header-top">
            <div className="header-left">
               <span>Xem tồn kho, giá bán tại</span>

               <select name="" id=""></select>
            </div>

            <div className="header-right">
               <span>Hotline: 1800.6608</span>
               <span className="line"></span>
               <span>Zalo cửa hàng</span>
               <span className="line"></span>
               <span>Ưu đãi khi tải app</span>
               <span className="line"></span>
               <span>Hệ thống 159 cửa hàng</span>
               <span className="line"></span>
               <span>Thưởng Kicon</span>
            </div>
         </div>
         <header className="header">
            <Logo />

            <div className="header-search">
               <Input
                  name="input"
                  type="text"
                  value=""
                  placeholder="Đồ sơ sinh 19k"
                  // onChange={(e) => {
                  //   onChange(e);
                  // }}
               />
               <button className="header-search__icon"></button>
            </div>

            <div className="header-history">
               <p>Lịch sử đơn hàng</p>
            </div>
            <div className="header-promo">
               <p>Ưu đãi</p>
            </div>
            <div className="header-cart">
               <p>Giỏ hàng</p>
            </div>
         </header>
      </>
   )
}

export default Header
