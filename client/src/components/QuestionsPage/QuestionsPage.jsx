import React, {useState} from 'react';
import './questionsPage.scss'

function QuestionsPage ({question, options, finalAnswer}) {
    const [answer, setAnswer] = useState(options);
    return (
<div  className="question">
    <h3 className="question__header">{question}</h3>
    <div className="question__option">
        {answer.map((option) =>{
        return (
        <button className="question__option-button" onClick={() => {
        setAnswer([option])
        finalAnswer(option)
        }}>{option}</button>
   
            )
        }
    )
}
    </div>
</div> 

    )
}

export default QuestionsPage