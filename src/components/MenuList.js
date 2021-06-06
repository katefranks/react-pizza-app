import { Component } from 'react';
class MenuList extends Component {
      constructor(props) {
      super(props);
      this.state = {
        category: '',
        price: '',
        selected: '',
        name: '',
        description: '',
      }
      this.saveItem = this.saveItem.bind(this);
    }
    saveItem() {
      this.setState({ category: '', price: '', selected: '', name: '', description: '', });
    }

    render() {
      const items = this.props.items.map((item) => (
        <li key={item.name}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        </li>
      ));

        return(
          <ul>{ items }</ul>
        )
      }
    }

  export default MenuList;
