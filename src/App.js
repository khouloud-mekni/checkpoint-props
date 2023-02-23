import './App.css';
import Profile from './profile/Profile';
import profileImg from "../src/profile.jpg";

function App() {
 const handleName=()=> alert("khouloud Mekni")
  return (
    <div className="App">
    
      <Profile 
      fullName="Mekni Khouloud"
      profession = "Web Developer"
      bio="I am a web developer."
      handleName={handleName}> 
      
      {profileImg}
      </Profile>
    </div>
  );
}


export default App;
