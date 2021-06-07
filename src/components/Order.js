function Order(props) {
  const items = props.order.map((item, index) => (
    <li>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button>Remove</button>
    </li>
  ));

  // const subtotal = props.order.reduce()

  return (
    <>
      <ul>{items}</ul>
      <div>${12}</div>
    </>
  )
}

export default Order;
