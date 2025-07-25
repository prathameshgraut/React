import Product from "./Product";


function ProductTab(){
    return(
    <>
        <Product title="Phone" price={35000}/>
        <Product title="Laptop" price={75000}/>
        {/* by defult set the value in product.jsx page  */}
        <Product title="Television" />
    </>
    )
}

export default ProductTab;