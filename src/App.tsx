import './App.css';
import Article from './Components/Article'
import ListOfStrings, {User} from './Components/ListOfStrings'

const myListFromApi: Array<User> = [
  {
    id: 'uuid1',
    name: 'one'
  },
  {
    id: 'uuid2',
    name: 'two'
  },
  {
    id: 'uuid3',
    name: 'three'
  },
]

function App() {
  return (
    <div className="App">
      <Article />
      <ListOfStrings strings={myListFromApi} />
    </div>
  );
}

export default App;
