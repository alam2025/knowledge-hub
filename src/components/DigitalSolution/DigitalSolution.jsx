import React, { useEffect, useState } from 'react';
import './DigitalSolution.css';
import Solution from '../Solution/Solution';
import SpentTime from '../SpentTime/SpentTime';

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
                  <div className='storedAction'>
                        <SpentTime />
                  </div>
            </div>
      );
};

export default DigitalSolution;