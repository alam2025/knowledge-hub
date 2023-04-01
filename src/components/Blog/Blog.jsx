import React from 'react';
import './Blog.css'

const Blog = () => {
      return (
            <div className='my-5 blog'>
                  <h1 className='text-center text-danger'>Important Interview Questions !!!</h1>
                  <div className='questions-container'>
                        <div className="accordion " id="accordionExample">
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                1. Props vs state.
                                          </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                                In the context of web development with React, <strong>props and state </strong> are both used to manage and update the data that is displayed on the user interface. <br /><br />

                                                Props (short for "properties") are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. The parent component sets the initial value for the prop, and then the child component can use the prop value to render its output.<br /><br />

                                                State, on the other hand, is used to manage data that can change within a component. State is initialized in the constructor of the component, and can be updated using the setState() method. When state is updated, React re-renders the component to reflect the new state.<br /><br />

                                                In summary, props are used to pass data down from a parent component to a child component, while state is used to manage data within a component that can change over time.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2. How does useState work?
                                          </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">

                                                useState is a built-in hook in React that allows functional components to have state variables.
                                                <br /> <br />

                                                When you use the useState hook, you call it with an initial value for the state variable you want to use. It returns an array containing two elements: the current state value and a function that can be used to update the state. <br /> <br />





                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                3. Purpose of useEffect other than fetching data.
                                          </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                                The useEffect hook in React is primarily used to manage side effects in functional components. While fetching data from an API is a common side effect, useEffect can also be used for a variety of other purposes, such as: <br /><br />

                                                Updating the title of the document: You can use useEffect to update the title of the document based on the state of the component. For example, you might want to update the title to reflect the current page or to display a notification if there are unsaved changes.<br /><br />

                                                Handling events: useEffect can be used to set up event listeners and handle events such as key presses, mouse clicks, or form submissions. This allows you to create more interactive and dynamic UIs.
                                                <br /><br />

                                                Managing animations: useEffect can be used to manage animations or transitions based on changes in the component state. For example, you might want to fade in a new element when it is added to the page.<br />

                                                Managing timers: useEffect can be used to set up and manage timers or intervals for tasks that need to be repeated at regular intervals. For example, you might want to set up a timer to automatically refresh a list of items every few minutes.<br />

                                                Cleaning up resources: useEffect can be used to clean up resources when a component is unmounted or updated. For example, you might want to remove an event listener or clear a timer when the component is no longer needed.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                4. How Does React work?
                                          </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                                React is a JavaScript library that allows developers to create user interfaces (UIs) for web applications. React works by using a component-based architecture, where UI elements are broken down into smaller, reusable components.
                                                <br /><br />

                                                Here's an overview of how React works:<br />

                                                Components: React is built around the concept of components. Each component represents a part of the UI, and can be composed of other components. Components can receive data (called props) from their parent components, and can also have their own internal state.<br /><br />

                                                Virtual DOM: React uses a virtual DOM (Document Object Model) to manage the UI. The virtual DOM is a lightweight representation of the actual DOM, and React uses it to efficiently update the UI when changes are made. When a component's state or props change, React generates a new virtual DOM tree and compares it to the previous one. It then updates only the parts of the actual DOM that have changed, resulting in faster and more efficient updates.<br /><br />

                                                JSX: React uses a syntax called JSX (JavaScript XML) to define components. JSX is a way to write HTML-like syntax within JavaScript code, allowing developers to create complex UIs with ease.<br /><br />

                                                Data flow: React uses a unidirectional data flow, where data flows down from parent components to child components through props. Child components can also update the data by calling functions passed down through props, but cannot modify the data directly.<br /><br />

                                                Hooks: React provides a set of hooks (such as useState and useEffect) that allow functional components to have state and manage side effects. This makes it easier to create and manage complex UIs without needing to use className components.
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Blog;