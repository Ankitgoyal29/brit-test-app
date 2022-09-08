import AppleProduct from './appleProduct.model';
import Table from 'react-bootstrap/Table';
import ProductRow from './product-row';

export default function ProductTable(props: { products: AppleProduct[] }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((product: AppleProduct) => {
                        return <ProductRow key={product.id} product={product} />
                    })
                }
            </tbody>
        </Table>
    )
}