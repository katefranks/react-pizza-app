import { Component} from 'react';
import './App.css';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';


class App extends Component {
  render() {
    return (
      <div>
        <App items={this.props.items} />
      </div>
    );
  }
}


const items = [
  {category: "Food Items", price: "$14", selected: false, name: "Cheese Pizza", description: "Full of cheesy goodness!"},
  {category: "Food Items", price: "$15", selected: false, name: "Peperoni Pizza", description: "Gateway to peperoni heaven!"},
  {category: "Food Items", price: "$17", selected: false, name: "Veggie Delight", description: "Slightly healthier, equally delicious!"},
  {category: "Food Items", price: "$18", selected: false, name: "Meat Lover's", description: "Need some extra protein in your life?"},
  {category: "Food Items", price: "$21", selected: false, name: "Everything", description: "For those that want it all!"},

  {category: "Dessert Items", price: "$6", selected: false, name: "Brownie Sundae", description: "Fresh brownie, scoop o' vanilla!"},
  {category: "Dessert Items", price: "$6", selected: false, name: "Apple Pie", description: "Better than your momma's!"},
  {category: "Dessert Items", price: "$7", selected: false, name: "Cheesecake", description: "NY style, southern flair!"},
  {category: "Dessert Items", price: "$3", selected: false, name: "Sherbert", description: "Somehow still a thing!"},
  {category: "Dessert Items", price: "$4", selected: false, name: "Strawberry Milkshake", description: "No, you can't have chocolate!"},

  {category: "Drink Items", price: "$3", selected: false, name: "Coke", description: "A classic favorite!"},
  {category: "Drink Items", price: "$3", selected: false, name: "Diet Coke", description: "Save those calories!"},
  {category: "Drink Items", price: "$5", selected: false, name: "Bud Light", description: "Cheers to beers!"},
  {category: "Drink Items", price: "$6", selected: false, name: "Blue Moon", description: "Almost craft beer!"},
  {category: "Drink Items", price: "$2", selected: false, name: "Bottled Water", description: "Stay hydrated!"}
];

export default App;
