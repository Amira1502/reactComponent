import Photo from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/FullName';
import Adress from './Component/Profile/Adresse';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* photo part */}
       <Photo/>
       {/* name part */}
       <Fullname/>
       {/* adress part */}
<Adress/>
    </div>
  );
}

export default App;
