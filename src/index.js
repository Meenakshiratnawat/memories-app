import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers';

//dispatch allow us to dispatch a action 
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
    </React.StrictMode>,
    </Provider>
  )
  