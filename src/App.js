import './App.css';
import ClassTimer from './components/ClassTimer';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';


function App() {
  return (
    <div className="App">
      <Counter /> 
      <FocusInput />
      <ClassTimer />
      <HookTimer />       
    </div>
  );
}

export default App;
