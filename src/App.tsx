import {Route, Switch} from 'react-router';
import './App.css';
import Counter from './Components/Counter';
import TodoList from './Components/TodoList';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/todos">
          <TodoList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
