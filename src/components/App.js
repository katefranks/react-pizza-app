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
        selected: false,
        name: "Cheese Pizza",
        description: "Full of cheesy goodness!"
      }, {
        category: "pizzas",
        price: 15,
        selected: false,
        name: "Peperoni Pizza",
        description: "Gateway to peperoni heaven!"
      }, {
        category: "pizzas",
        price: 17,
        selected: false,
        name: "Veggie Delight",
        description: "Slightly healthier, equally delicious!"
      }, {
        category: "pizzas",
        price: 18,
        selected: false,
        name: "Meat Lover's",
        description: "Need some extra protein in your life?"
      }, {
        category: "pizzas",
        price: 21,
        selected: false,
        name: "Everything",
        description: "For those that want it all!"
      }, {
        category: "desserts",
        price: 6,
        selected: false,
        name: "Brownie Sundae",
        description: "Fresh brownie, scoop o' vanilla!"
      }, {
        category: "desserts",
        price: 6,
        selected: false,
        name: "Apple Pie",
        description: "Better than your momma's!"
      }, {
        category: "desserts",
        price: 7,
        selected: false,
        name: "Cheesecake",
        description: "NY style, southern flair!"
      }, {
        category: "desserts",
        price: 3,
        selected: false,
        name: "Sherbert",
        description: "Somehow still a thing!"
      }, {
        category: "desserts",
        price: 4,
        selected: false,
        name: "Strawberry Milkshake",
        description: "No, you can't have chocolate!"
      }, {
        category: "drinks",
        price: 3,
        selected: false,
        name: "Coke",
        description: "A classic favorite!"
      }, {
        category: "drinks",
        price: 3,
        selected: false,
        name: "Diet Coke",
        description: "Save those calories!"
      }, {
        category: "drinks",
        price: 5,
        selected: false,
        name: "Bud Light",
        description: "Cheers to beers!"
      }, {
        category: "drinks",
        price: 6,
        selected: false,
        name: "Blue Moon",
        description: "Almost craft beer!"
      }, {
        category: "drinks",
        price: 2,
        selected: false,
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
