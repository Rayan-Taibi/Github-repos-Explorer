import React from 'react'
import './App.css'
import Header from './components/Header.jsx' 
import Search from './components/Search.jsx' 
import Content from './components/Content.jsx'

function App() {
  const [username , setUsername] = React.useState('');
  const [error , setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [userInfo , setUserInfo] = React.useState(null);

  const fetchRepos = async () => {
    if(!username.trim()){
      setError("ENTER A VALID USERNAME");
      
      return;
    }
    setLoading(true);
    setError(null);
    setRepos([]);
    setUserInfo(null);
    try{
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if(!userResponse.ok){
        throw new Error("User not found");
      }
      const userData = await userResponse.json();
      setUserInfo(userData);
      
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if(!reposResponse.ok){
        throw new Error("Failed to fetch repositories");
      }
      const reposData =  await reposResponse.json();
      setRepos(reposData);
    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
    
  
  return (
    <>
      <Header/>
      <Search username={username} setUsername={setUsername} fetchRepos={fetchRepos} loading={loading} />
      <Content/>
    </>
  )
 }
}
export default App
