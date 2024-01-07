import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './StateProvider.jsx';
import { initialState } from './Reducer.jsx';
import reducer from './Reducer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
