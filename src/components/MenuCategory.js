import { Component } from 'react';
class MenuCategory extends Component{
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
// import { Component } from 'react';
// class MenuCategory extends Component{
//   constructor(props) {
//       super(props);
//       this.state = {
//         items: [],
//       }
//     }
// //
// addTodo(todo){
//   todo.id = this.state.counter;
//   const todos = [ ...this.state.todos ];
//   todos.push(todo);
//   this.setState((state) => ({ todos, counter: state.counter + 1 }));
// }
// //
// addCategory(category)
//     {
//     const rows = [];
//     let lastCategory = null;
//     this.props.items.forEach((item) =>
//     {
//       if (item.category !== lastCategory)
//     {
//       rows.push(
//           <item.category={item.category}
//             key={item.category} />
//         );
//       }
//       rows.push(
//         <ItemRow
//           item={item}
//           key={item.name} />
//       );
//       lastCategory = item.category;
//     });
//
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>{this.state.category}</th>
//           </tr>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }
// export default MenuCategory;

///////////////////////
// 6/5/21- 5pm:
///Next: incorporate category row into component to display categories and arrange items by correct category.
// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }
//
// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;
//
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }




// import { Component } from 'react';
// class MenuCategory extends Component {
//   render() {
//       const category = this.props.category;
//       return (
//         <tr>
//           <th colSpan="2">
//             {category}
//           </th>
//         </tr>
//       );
//     }
// }
//
// export default MenuCategory;
