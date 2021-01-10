import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CellphoneContainer from './components/CellphoneContainer';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <CellphoneContainer />
      <AddTodo />
    </Provider>
  );
}

export default App;
