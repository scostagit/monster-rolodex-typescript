import {useState, useEffect} from 'react';

import CardList  from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import { Monster } from './models/Monster';
import './App.css';


const App = () =>{

  console.log("render");
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   useEffect(() => {
   /* fetch('https://jsonplaceholder.typicode.com/users')        
       .then((response) => response.json())
       .then((users)=> setMonsters(users));  */
       
       const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
       }

       fetchUsers();

   },[]);
   
   useEffect(() => {

      const newFilteredMonsters = monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);

   }, [monsters, searchField]);
    
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    setSearchField(event.target.value.toLocaleLowerCase());
  }

  return (
      <div className="App">
      <h1 className="app-title">Monsters Rolod</h1>        
        <SearchBox 
              className="search-box"           
              placeholder="search monsters"
              onChangeHandler={onSearchChange}
          />      
          <CardList monsters={filteredMonsters}/>          
    </div>
  );
}

export default App;
