// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/reducer';


const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, undefined, middleware);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
}



export default App;
