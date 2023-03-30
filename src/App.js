import './App.css';
import FooterElement from './components/FooterElement';
import LabelElement from './components/LabelElement';
import Button from './components/Button'

function App() {
  return (
    <div className='main-container'>
    <h1>User Story Creator</h1>
    <FooterElement/> 
    <LabelElement rows = "4" cols="30"/>
    <Button/>
    </div>
  );
}

export default App;
