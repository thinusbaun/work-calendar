import logo from './logo.svg';
import './App.css';
import LogInOutButton from "./LogInOutButton"
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <LogInOutButton></LogInOutButton>
      </header>
    </div>
    </Provider>
  );
}

export default App;
