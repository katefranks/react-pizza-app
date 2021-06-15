import {Component} from 'react';
import './App.css';
import MenuList from './MenuList';
import Order from './Order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
    }
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidMount() {
    const items = [
      {
        category: "pizzas",
        price: 14,
        name: "Cheese Pizza",
        description: "Full of cheesy goodness!"
      }, {
        category: "pizzas",
        price: 15,
        name: "Peperoni Pizza",
        description: "Gateway to pepperoni heaven!"
      }, {
        category: "pizzas",
        price: 17,
        name: "Veggie Delight",
        description: "Slightly healthier, equally delicious!"
      }, {
        category: "pizzas",
        price: 18,
        name: "Meat Lover's",
        description: "Need some extra protein in your life?"
      }, {
        category: "pizzas",
        price: 21,
        name: "Everything",
        description: "For those that want it all!"
      }, {
        category: "desserts",
        price: 6,
        name: "Brownie Sundae",
        description: "Fresh brownie, scoop o' vanilla!"
      }, {
        category: "desserts",
        price: 6,
        name: "Apple Pie",
        description: "Better than your momma's!"
      }, {
        category: "desserts",
        price: 7,
        name: "Cheesecake",
        description: "NY style, southern flair!"
      }, {
        category: "desserts",
        price: 3,
        name: "Sherbert",
        description: "Somehow still a thing!"
      }, {
        category: "desserts",
        price: 4,
        name: "Strawberry Milkshake",
        description: "No, you can't have chocolate!"
      }, {
        category: "drinks",
        price: 3,
        name: "Coke",
        description: "A classic favorite!"
      }, {
        category: "drinks",
        price: 3,
        name: "Diet Coke",
        description: "Save those calories!"
      }, {
        category: "drinks",
        price: 5,
        name: "Bud Light",
        description: "Cheers to beers!"
      }, {
        category: "drinks",
        price: 6,
        name: "Blue Moon",
        description: "Almost craft beer!"
      }, {
        category: "drinks",
        price: 2,
        name: "Bottled Water",
        description: "Stay hydrated!"
      }
    ];

    this.setState({items});

  }

  addToOrder(orderItem) {
    const order = [...this.state.order];
    order.push(orderItem);
    this.setState({order});
  }

  // saveOrder(order) {
  //
  //
  // }

  render() {
    return (
      <div className="main-menu">
        <header>
          <h1 className="main-header">Vic's Pizza</h1>
        </header>
        <MenuList items={this.state.items} addToOrder={this.addToOrder}/>
        <Order order={this.state.order} />
      </div>
  );}
}
export default App;

// <MenuCategory category ={this.props.category} />
// <MenuItem item={this.props.item} />
