import { Product } from "../interfaces/product"

//defining how others should pass data
interface ProductCardProps{
    product: Product
}
//display a product using that interface
export function ProductCard(props: ProductCardProps){
    return (
        <div>
            <h2>{props.product.productName}</h2>
            <p>{props.product.price}</p>
        </div>
    )
}