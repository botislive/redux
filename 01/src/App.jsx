import './App.css'
import {Provider} from 'react-redux';
import {store} from './store';
import Todos from './Components/Todos';
import TodoItem from './Components/TodoItem';
function App() {

  return (
    <>
    <Provider store={store}>
      <Todos/>
      <TodoItem/>
    </Provider>
    </>
  )
}

export default App
