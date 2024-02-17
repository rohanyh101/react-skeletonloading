import './App.css'
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  // empty dependency array means that, this will run whenever the feed component is loaded...
  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('/api/user/1');
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  // console.log(videos);

  return (
    <div className="container">
      <Sidebar isLoading={isLoading}/>
      <div className="home">
        <Topbar isLoading={isLoading} user={user}/>
        <Feed />
      </div>
    </div>
  )
}

export default App
