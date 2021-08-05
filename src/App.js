import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Me></Me> */}
        <Header></Header>
        <Shop></Shop>
      </header>
    </div>
  );
}
// function Me() {
//   return (
//     <div>
//       <h1 style={{color: 'var(--main-color)'}}>Hello World</h1>
//     </div>
//   )
// }
export default App;
