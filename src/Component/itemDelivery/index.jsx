import React from 'react'
import './style.scss'
const ItemDelivery = () => {
  return (
    <div className='itemContainer'>
        <div className="itemContainerLeft">
            <div className="itemContainerLeftTitle">
            Miễn phí giao hàng cho đơn hàng từ 50.000đ
            </div>
            <div className="itemContainerLeftDate">
            HSD: 26-05-2022
            </div>
        </div>
        <div className="itemContainerRight">
            <div className="itemContainerRightBut">
                Lưu
            </div>
        </div>
    </div>
  )
}

export default ItemDelivery