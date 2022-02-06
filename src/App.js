
import './App.css';
import Profile from './Profile/Profile';
import Skan from '../src/Skan.jpg'

function App() {
  var fullName = 'Skander Hammami', bio = 'xxxxxxxx' ,profession = 'Student'
  const handleName = () => {
    alert.show({fullName})
  }
 const stylee = {color : "red"}
  return (
    <div style={stylee}>
       <Profile  fullName={fullName} bio={bio} profession={profession} Skan={Skan} handleName={handleName}> 
       {Skan}  
       </Profile>
       
    </div>
  );
  
}


export default App;
