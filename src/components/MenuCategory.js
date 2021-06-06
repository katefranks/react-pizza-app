import { Component } from 'react';
class MenuCategory extends Component {
  render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
}

export default MenuCategory;
