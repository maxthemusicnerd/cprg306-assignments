import Item from "./item.js"; 


export default function ItemList() {


  const items = list;

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}
