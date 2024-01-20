import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
//pages
import AuthPage from './pages/AuthPage/AuthPage';

//components
import NavBar from './components/NavBar/NavBar';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';

function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className='App'>
      {user ? (
        <>
          <WelcomeBanner/>
          <NavBar user={user} setUser={setUser} />
          <Routes>
  
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
