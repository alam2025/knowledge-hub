
import './Cart.css';
import BookMark from '../BookMark/BookMark';



const Cart = ({ cart, bookmark ,blog}) => {
      
            // console.log(bookmark);
      
      

      // console.log(bookmark);

      let read = 0;
      // console.log(cart);
      for (const c in cart) {
            let time = cart[c].read_time;
            time = parseInt(time);
            read += time;
      }


//     console.log(bookmark);
     


      return (
            <div className='cart'>
                  <div className='spent-time'>
                        <h5>Spent time on read : {read} </h5>
                  </div>
                  <div className='bookMark mt-4'>
                        <h5>BookMarked Blogs : {blog}</h5>
                       
                         {
                              bookmark.map(b=><BookMark
                                     bookmark={b} 
                                     key={b.id}
                                     />)
                         }
                       

                  </div>
            </div>
      );
};

export default Cart;