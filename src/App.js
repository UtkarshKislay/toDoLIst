import logo from './logo.svg';
import './App.css';
import Input from './Component/Input';
import TaskList from './Component/TaskList';
function App() {
  return (
    <div className="App">
      <div className='task_input'>
        <Input />
      </div>
      <div className='task_list'>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
