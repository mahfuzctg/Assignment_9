import React from 'react';

const Blog = () => {
    return (
        <div className='container bg-light p-4 my-4 rounded-5'>
            <div>
                <h5>Question_1: When should you use context API?</h5>
                <p>Ans : Use Context API in React to pass data between components without prop drilling, for managing global state, and simplifying component communication. #React #ContextAPI #StateManagement</p>
            </div>

            <div>
                <h5>Question_2: What is a custom hook?</h5>
                <p>Ans : A custom hook in React is a reusable function that encapsulates state logic or side effects, allowing components to share and reuse that logic, improving code organization and reducing duplication. Custom hooks start with the prefix "use" and follow the rules of hooks in React</p>
            </div>

            <div>
                <h5>Question_3 : What is useRef?</h5>
                <p>Ans : useRef is a hook in React that returns a mutable object with a current property that can hold a reference to a DOM element or any other value. It allows you to access and manipulate the referenced value across render cycles without triggering component re-renders, making it useful for handling references or managing stateful values in functional components.</p>
            </div>

            <div>
                <h5>Question_4 : What is useMemo?</h5>
                <p>Ans : useMemo is a React hook that optimizes performance by memoizing computed values, preventing unnecessary re-computations. It takes a function and dependencies, returning memoized result. #React #useMemo #PerformanceOptimization</p>
            </div>
        </div>
    );
};

export default Blog;