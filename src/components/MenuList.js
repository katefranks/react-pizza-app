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
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        </tr>
      ));

        return(
          <table>
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
