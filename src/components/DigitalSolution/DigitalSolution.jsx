import React, { useEffect, useState } from 'react';
import './DigitalSolution.css';
import Solution from '../Solution/Solution';

import Cart from '../Cart/Cart';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const DigitalSolution = () => {
      const [items, setItems] = useState([]);
      const [cart, setCart]=useState([]);
      const [bookmark, setBookmark]=useState([]);
      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, []);

      
      const addReadTime=solution=>{
            const newCart = [...cart,solution];
            setCart(newCart);
      }


      const addBookMark =(solution)=>{
            
            const exist = bookmark.find(b=>b.id === solution.id);
            if(!exist){
                  const newBookmark = [...bookmark,solution]
                  setBookmark(newBookmark);
            }
            else{
                  console.log('fhsdfh');
            }
            
      };
      // console.log(bookmark);
     

      
      return (
            <div className='digital-content'>
                  <div>
                        {
                              items.map(solution => <Solution
                                    key={solution.id}
                                    solution={solution}
                                    addReadTime ={addReadTime}
                                    addBookMark ={addBookMark}
                                   
                              />)
                        }
                  </div>
                  <div >
                        <Cart   
                        cart={cart}  
                        bookmark ={bookmark}         
                        />
                  </div>
            </div>
      );
};

export default DigitalSolution;