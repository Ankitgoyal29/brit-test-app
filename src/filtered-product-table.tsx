import { useState, Fragment } from 'react';
import AppleProduct from "./appleProduct.model";
import ProductCategorySelection from "./product-category-selection";
import ProductTable from "./product-table";

export default function FilteredProductTable(props: { products: AppleProduct[] }) {
    const [category, setCategory] = useState<string>(props.products[0].category);

    const [filteredProducts, setFilteredProducts] = useState<AppleProduct[]>(props.products);

    const onSelectedCategoryChange = (categorySelected: string | undefined): void => {
        if (categorySelected) {
            setFilteredProducts(props.products.filter(p => p.category === categorySelected));
        }
    }

    return (
        < Fragment >
            <ProductCategorySelection selectedCategory={category} selectCategory={onSelectedCategoryChange} />
            <br></br>
            <ProductTable products={filteredProducts} />
        </Fragment >
    )
}