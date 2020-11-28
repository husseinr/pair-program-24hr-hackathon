import React from 'react';
import './pageResults.scss';


 function PageResults({final_score, try_again}) {
    return (
       <section>
           <div className="page-results">
               <p className="page-results__score">{final_score}/10</p>
               <p className="page-results__pain"> You Pain </p>
               <p className="page-results__inmy"> in my </p>
               <p className="page-results__sass"> SASS </p>
               <button className="page-results__try-again" onClick={try_again}>Try Again</button>
           </div>
       </section>
    )
}

export default PageResults;
