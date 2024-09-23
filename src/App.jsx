
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipies from './components/Recipies/Recipies'
import Sidebar from './components/Sidebar/Sidebar'
import Title from './components/Tittle/Title'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const [recipie, setRecipie] = useState([])

  


  const handleCook =(rec)=>{
    const isExist = recipie.find(item => item.recipe_id === rec.recipe_id);
    if(!isExist){
      const newRecipie =[...recipie, rec]
    
      setRecipie(newRecipie);
    }else{
    toast.error('This recipie is already added');
     
    }

}



const handlePrepair = (id) =>{
  const newRecipie = recipie.filter(item => item.recipe_id != id)
  setRecipie(newRecipie);

}

  return (
    <>
      <header>
      <Navbar/>
      <Banner/>
      </header>
      <main>
        <Title/>
        <section className='flex'>
        <Recipies handleCook={handleCook}/>
        <Sidebar recipie={recipie} handlePrepair={handlePrepair}/>
        <Toaster  position="top-right"
  reverseOrder={false}/>
        </section>
      </main>
    </>
  )
}

export default App
