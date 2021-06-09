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
      <h2>Items Added to Order:</h2>
      <ul>{items}</ul>
      <div>Subtotal = ${subtotal}</div>
      <br/>
      <button onClick ={() => {const { order } = props; localStorage.setItem('order', items);}}>Save Order</button>
      <br/>
    </div>
    </>
  )
}

export default Order;
