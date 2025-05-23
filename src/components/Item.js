function Item({ item, onToggleCart, onDelete }) {
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={() => onToggleCart(item.id)}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}

export default Item;
