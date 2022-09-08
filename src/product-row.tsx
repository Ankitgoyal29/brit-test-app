import AppleProduct from './appleProduct.model';

export default function ProductRow(props: { product: AppleProduct }) {
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stock}</td>
            <td>{props.product.category}</td>
            <td> {props.product.thumbnail}</td>
        </tr>
    )
}