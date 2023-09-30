import './info.scss'

const Info = () => {
   return (
      <div className="info">
         <div className="info-user">
            <div>
               <img src="" alt="" />

               <div className="user-left">
                  <span>Xin chào, Bố Bin!</span>
                  <button className="btn-Buy">Mua nhanh</button>
               </div>
            </div>

            <div className="">
               <img src="" alt="" />
               <div className="user-right">
                  <span>KiCoin</span>
                  <h3 className="coin-price">12.000</h3>
               </div>
            </div>
         </div>
         <div className="info-personal">
            <div>
               <span>Thông tin tài khoản</span>
            </div>
            <div>
               <span>Số địa chỉ</span>
            </div>
            <div>
               <span>Sản phẩm đã xem</span>
            </div>
         </div>
         <div className="info-promo">
            <h3 className="promo-title">Tải app KidsPlaza - Nhận quà bao la</h3>
            <div className="group-text">
               <p>
                  Nhập mã BANMOIT8 - Giảm ngay 50.000 cho đơn hàng từ 699.000 đ
               </p>
               <p>Hàng ngàn voucher khác chỉ áp dụng khi đặt hàng tại App.</p>
            </div>
            <div className="group-block-content">
               <h4 className="h4-title">Quét mã QR để tải app</h4>

               <div className="block-content">
                  <div className="block-content-left">
                     <img
                        src="https://cdn-v2.kidsplaza.vn/media/images/QR.png"
                        alt="Tải app trên App Store và Google Play"
                        width={82}
                        height={82}
                     />
                  </div>
                  <div className="block-content-right">
                     <a
                        href="https://apps.apple.com/vn/app/kidsplaza-mẹ-bầu-em-bé/id1570027587?l=vi"
                        target="_blank"
                     >
                        <img
                           src="https://cdn-v2.kidsplaza.vn/media/header/Group_14993.png"
                           alt="Tải app trên App Store"
                           width={122}
                           height={36}
                        />
                     </a>
                     <a
                        href="https://play.google.com/store/apps/details?id=com.smartosc.kidsapp"
                        target="_blank"
                     >
                        <img
                           src="https://cdn-v2.kidsplaza.vn/media/header/Group_14994.png"
                           alt="Tải app trên Google Play "
                           width={122}
                           height={36}
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Info
