
export default function Item({name, quantity, category}) {
    return(
        <div className="border border-blue-300 p-4 m-8 text-white max-w-sm">
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{category}</div>
        </div>
    )
}