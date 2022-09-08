export default function ProductCategorySelection
    (props: { selectedCategory: string | undefined, selectCategory: (type: string | undefined) => void }) {

    return (
        <input defaultValue={props.selectedCategory} onChange={(event) => { props.selectCategory(event.target.value); event.preventDefault(); }} />
    )
}