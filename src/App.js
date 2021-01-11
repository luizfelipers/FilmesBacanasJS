import React, {useState} from 'react';
import Search from './Components/Search';
import axios from 'axios';
import Results from './Components/Results';
import Popup from './Components/Popup/index';

function App() {

const apiUrl = 'http://www.omdbapi.com/?apikey=a77c7cc0'
const [state, setState] = useState({
  s: '',
  results: [],
  selected: {}

});

const search = (e) => {
  if(e.key === 'Enter'){
    axios(apiUrl + '&s=' + state.s).then(({data})=> {
      let results = data.Search;

setState(prevState => {
  return {...prevState, results: results}
})
      // console.log(data);
    })
  }
}


const handleInput = (e) =>{
  let s = e.target.value;

setState(prevState => {
  return {...prevState, s: s}
});

console.log(state.s);
}


const openPopup = id => {
  axios(apiUrl + '&i=' + id).then(({data}) => {
    let result = data;

    setState(prevState => {
      return{...prevState, selected: result}
    });
  })
};

const closePopup = () => {
  setState(prevState => {
    return {...prevState, selected: {}}
  });
}

  return (
    <div className="App">
      <header>
       
<h1>Filmes Bacanas</h1>
          <h2>O maior acervo de filmes bacanas do mundo!</h2>
        
          
         
          
      </header>
      <main>
 <Search handleInput={handleInput} search={search}></Search>
          {(typeof state.results != 'undefined') ? <Results results={state.results} openPopup={openPopup} /> : <p>Enter a valid search term</p> }
    
    {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}></Popup> : false}
   
   
      </main>
    
    </div>
  );
}

export default App;
