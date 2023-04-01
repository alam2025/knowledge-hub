import React, { useEffect, useState } from 'react';
import './DigitalSolution.css';
import Solution from '../Solution/Solution';

import Cart from '../Cart/Cart';


const DigitalSolution = ({showToastMessage}) => {
      const [count,setCount]=useState(0);
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
                  setCount(count+1);
                  const newBookmark = [...bookmark,solution]
                  setBookmark(newBookmark);
            }
            else{
                  showToastMessage();
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
                        {/* <ToastContainer />; */}
                  </div>
                  <div >
                        <Cart   
                        cart={cart}  
                        bookmark ={bookmark}   
                        blog={count}      
                        />
                  </div>
            </div>
      );
};

export default DigitalSolution;