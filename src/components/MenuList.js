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
        <tr key={item.name}>
        <th>{item.name.category}</th>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td><button>{item.price}</button></td>
        </tr>

      ));

        return(
          <table>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
          { items }
          </table>
        )
      }
    }

  export default MenuList;

  // <tr>
  //     <td>USA</td>
  //     <td>Washington, D.C.</td>
  //     <td>309 million</td>
  //     <td>English</td>
  //   </tr>
