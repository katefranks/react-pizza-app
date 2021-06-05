import { Component} from 'react';
import './App.css';
// import ContactsList from './ContactsList';
// import ContactsForm from './ContactsForm';

function App() {
  return (
    <div className="MenuContainer">
        <header>
          <h1>Vic's Pizza</h1>
        </header>
        <div className="ItemsTables">
          <table className="FoodItems">
              <colgroup span="3"></colgroup>
              <tr>
                <th className="ItemNames">Name</th>
                <th className="ItemDescriptions">Description</th>
                <th className="ItemPrices">Price</th>
              </tr>
              <tr>
                <td className="ItemName">Cheese Pizza</td>
                <td className="ItemDescription">Full of cheesy goodness!</td>
                <td className="ItemPrice">$14</td>
              </tr>
              <tr>
                <td className="ItemName">Peperoni Pizza</td>
                <td className="ItemDescription">Gateway to peperoni heaven!</td>
                <td className="ItemPrice">$15</td>
              </tr>
              <tr>
                <td className="ItemName">Veggie Delight</td>
                <td className="ItemDescription">Slightly healthier, equally delicious!</td>
                <td className="ItemPrice">$17</td>
              </tr>
              <tr>
                <td className="ItemName">Meat Lover's</td>
                <td className="ItemDescription">Need some extra protein in your life?</td>
                <td className="ItemPrice">$18</td>
              </tr>
              <tr>
                <td className="ItemName">Everything</td>
                <td className="ItemDescription">For those that want it all!</td>
                <td className="ItemPrice">$21</td>
              </tr>
          </table>
          <table className="DessertItems">
          <colgroup span="3"></colgroup>
          <tr>
            <th className="ItemNames">Name</th>
            <th className="ItemDescriptions">Description</th>
            <th className="ItemPrices">Price</th>
          </tr>
          <tr>
            <td className="ItemName">Brownie Sundae</td>
            <td className="ItemDescription">Fresh brownie, scoop o' vanilla!</td>
            <td className="ItemPrice">$6</td>
          </tr>
          <tr>
            <td className="ItemName">Apple Pie</td>
            <td className="ItemDescription">Better than your momma's!</td>
            <td className="ItemPrice">$6</td>
          </tr>
          <tr>
            <td className="ItemName">Cheesecake</td>
            <td className="ItemDescription">NY style, southern flair!</td>
            <td className="ItemPrice">$7</td>
          </tr>
          <tr>
            <td className="ItemName">Sherbert</td>
            <td className="ItemDescription">Somehow still a thing!</td>
            <td className="ItemPrice">$3</td>
          </tr>
          <tr>
            <td className="ItemName">Strawberry Milkshake</td>
            <td className="ItemDescription">No, you can't have chocolate!</td>
            <td className="ItemPrice">$4</td>
          </tr>
          </table>
          <table className="DrinkItems">
            <colgroup span="3"></colgroup>
            <tr>
              <th className="ItemNames">Name</th>
              <th className="ItemDescriptions">Description</th>
              <th className="ItemPrices">Price</th>
            </tr>
            <tr>
              <td className="ItemName">Coke</td>
              <td className="ItemDescription">A classic favorite!</td>
              <td className="ItemPrice">$3</td>
            </tr>
            <tr>
              <td className="ItemName">Diet Coke</td>
              <td className="ItemDescription">Save those calories!</td>
              <td className="ItemPrice">$3</td>
            </tr>
            <tr>
              <td className="ItemName">Bud Light</td>
              <td className="ItemDescription">Cheers to beers!</td>
              <td className="ItemPrice">$5</td>
            </tr>
            <tr>
              <td className="ItemName">Blue Moon</td>
              <td className="ItemDescription">Almost craft beer!</td>
              <td className="ItemPrice">$6</td>
            </tr>
            <tr>
              <td className="ItemName">Bottled Water</td>
              <td className="ItemDescription">Stay hydrated!</td>
              <td className="ItemPrice">$2</td>
            </tr>
          </table>

        </div>
    </div>
  );
}

export default App;
