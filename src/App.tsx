import './App.css';
import Article from './Components/Article'
import ComponentWithChildren from './Components/ComponentWithChildren';
import Counter from './Components/Counter'
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
      <ComponentWithChildren
        header={<h1>Header</h1>}
        footer={<p>Ich bin ein footer</p>}
      >
        <p>I am wrapped by "ComponentWithChildren"</p>
      </ComponentWithChildren>
      <hr />

      <Counter />
      <Counter initialCount={10} step={10} />

    </div>
  );
}

export default App;
