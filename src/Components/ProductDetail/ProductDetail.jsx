import React from 'react';
import BoxDetail from './BoxDetail';
import style from "../../styles/Product.module.css";

function ProductDetail() {
    return (
        <div>
            <h1 className={style.spaceHead}>ProductDetail</h1>
            <p className={style.paraDetail}>The patented eighteen-inch hardwood Arrowhead deck finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.
            </p>
            <p className={style.paraDetail}>
                The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
            <div className={style.listDetail}>
                <p>Regular fit, mid-weight t-shirt</p>
                <p>Natural color, 100% premium combed organic cotton
                </p>
                <p>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</p>
                <p>Soft touch water based printed in the USA</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <BoxDetail />
                {/* <BoxDetail customBackground="" />
                <BoxDetail customBackground="" />
                <BoxDetail customBackground="" /> */}
            </div>
        </div>
    )
}

export default ProductDetail