import './App.css';
import { CustomButton, CustomTextArea, TextInput } from './components';

function App() {
  return (
    <div className='main-container'>
    <h1>User Story Creator</h1>
    <TextInput placeHolderTitle="Write User Story Title here"/>
    <TextInput placeHolderTitle='Write Role Model here'/>  
    <CustomTextArea placeholderTitle='Write Additional Description Here'/>
    <CustomButton/> 
    </div>
  );
}

export default App;

