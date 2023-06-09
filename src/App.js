import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Characters } from './Components/Characters';
import SearchBox from './Components/SearchBox';

function App() {
  const [characters,setCharacters] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(1);

  useEffect(()=>{
    const getData = async ()=>{
      axios.get("https://rickandmortyapi.com/api/character").then(data=>setCharacters(data.data.results)).catch(error=>console.log(error))
    };
    getData();
  },[])

  // console.log(characters)
  const onSearchChange = (event) => {    
    setSearchfield(event.target.value);    
  }

  const NextPage = async()=>{
    
    console.log(count)
    if(count===42){
      return;
    }
    
    let list = await axios.get(`https://rickandmortyapi.com/api/character/?page=${count+1}`);
    setCount(pre=>pre+1);
    // console.log(list.data.results)
    const data = list.data.results;
    // console.log(data)
    setCharacters(data);
  }
  const PrePage = async()=>{
    if(count===1){
      return;
    }
    
    let list = await axios.get(`https://rickandmortyapi.com/api/character/?page=${count-1}`);
    setCount(pre=>pre-1);
    // console.log(list.data.results)
    const data = list.data.results;
    // console.log(data)
    setCharacters(data);
  }
  
  return characters && (
    <div className="App">
      <SearchBox searchChange={onSearchChange}/>
      <Characters characters={characters} searchfield={searchfield} />
      <button className='b--green br4 bg-light-green ma3 pa3-ns' onClick={PrePage}>Pre</button>
      <button className='b--green br4 bg-light-green ma3 pa3-ns' onClick={NextPage}>Next</button>
    </div>
  )
}

export default App;
