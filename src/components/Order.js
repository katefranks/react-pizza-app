function Order(props) {
  const items = props.order.map((item, index) => (
    <li>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button>Remove</button>
    </li>
  ));

  const subtotal = props.order.reduce((acc, i) => acc + i.price, 0);

  return (
    <>
    <div className="order-container">
      <ul>{items}</ul>
      <div>${subtotal}</div>
      <button onClick ={() => {const { order } = props; localStorage.setItem('order', items);}}>Save Order</button>
    </div>
    </>
  )
}

export default Order;
