import React, { useEffect, useState } from 'react';
import './DigitalSolution.css';
import Solution from '../Solution/Solution';

const DigitalSolution = () => {
      const [items, setItems] = useState([]);
      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, []);
      return (
            <div className='digital-content'>
                  <div>
                        {
                              items.map(solution => <Solution
                                    key={solution.id}
                                    solution={solution}
                              />)
                        }
                  </div>
                  <div>
                        <h1>dfhaksjfhajks sdfjn</h1>
                  </div>
            </div>
      );
};

export default DigitalSolution;