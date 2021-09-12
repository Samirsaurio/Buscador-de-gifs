import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//rafc
export const GifExpertApp = () => {

    //const categories = ['DBZ', 'Death Note', 'AoT'];
    const [categories, setCategories] = useState(['DBZ']);

    
    return (
        <div>
            <h2>Buscador de GIF's by Samir Jimenez</h2>
            <AddCategory setCategories={setCategories}/>
            
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                    
                    //categories.map((category, i) => {
                     //   return <li key={category}>{category}</li>
                    //})
                }
            </ol>
        </div>
    )
}
