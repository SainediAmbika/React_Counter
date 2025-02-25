import logo from './logo.svg';
import './App.css';
import CounterC from './CounterC';
import FunctionalCompCount from './FunctionalCompCounter';

//Class Counter
// function App() {
//   return (
//     <div className="App">
//       <br></br>
//      <CounterC />
//       <FunctionalCompCount/>
//     </div>
//   );
// }

// export default App;


//Functional Counter
function App() {
  return (
    
    <div className="App">
      <div>
      <h1>Counter Apps</h1>
      <br></br>
      </div>
      <br></br>
 
      <FunctionalCompCount/>
    </div>
  );
}

export default App;
