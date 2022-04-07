import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div class='questions-area'>
            <h1 className='question-title'>Questions</h1>
            <ul>
                <li className='question-text'>
                    <h3>How React works?</h3>
                    <p><strong>Ans: </strong>I did not understand the process very clearly. I just know that Reactjs uses virtual DOM. Virtual DOM means the copy of UI is kept in a memory. Using diff algorithm Reactjs compares the real DOM with virtual DOM. So it can easily identify what has changed in the UI. It takes less time for rendering the updated part.</p>
                </li>
                <hr />
                <li className='question-text'>
                    <h3>Props vs State?</h3>
                    <p><strong>Ans: </strong>props are read-only. But state can be changed asynchronously.props can not be modified. state can be modified using(this.setState).</p>
                </li>
                <hr />
                <li className='question-text'>
                    <h3>How useState works?</h3>
                    <p><strong>Ans: </strong>useState is a hook function that allows to have state variables in functional component. We have get two parameters from useState. one is for declaring the state. And the other one is a special function which is dispatched if state has been changed or updated. Besides we can get updated value of useState we can use useEffect.</p>
                </li>
            </ul>

        </div>
    );
};

export default Questions;