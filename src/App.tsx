import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data.json';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import CSS from 'csstype'
const widthStyles: CSS.Properties={
  width:'100%',
  height:'500px'
} 
//.ag-theme-balham-dark{}
interface MyProps{
 // name: string
}
interface MyState{
  name: string
}
const dataFromJSON=data.price;
// const word=data.shares;
// console.log(word);
{/* const word=(data).shares; */}
const columnDefs=[
  {headerName: "Symbol", field:"symbol"},
  {headerName: "Price", field:"price"},
  {headerName: "Shares", field:"shares"},
  {headerName: "Side (Buy/Sell)", field:"side"},
  {headerName: "Status", field:"status"},
];

const rowData=[
  
  // {symbol: "TCS", price:100, shares:200, side:"Buy",status:"Partial Filled"},
  // {symbol: "Accenture", price:250, shares:124, side:"Buy",status:"Partial Filled"},
  // {symbol: "Wipro", price:190, shares:312, side:"Sell",status:"Partial Filled"},
  // {symbol: "Apple", price:300, shares:3130, side:"Buy",status:"FulFilled"},
  // {symbol: "Yes Bank", price:400, shares:1000, side:"Buy",status:"Partial Filled"},
  // {symbol: "Sun Pharma", price:210, shares:300, side:"Sell",status:"Partial Filled"},
  // {symbol: "JBL", price:10090, shares:15, side:"Sell",status:"FulFilled"},



];
class App extends Component<MyProps,MyState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'React'
    };  
  }

  render() {
    return (
      <div
        className="ag-theme-balham-dark"
        style={
        widthStyles}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={dataFromJSON}>
        </AgGridReact>
        {/* <dataPosting /> */}
        
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
