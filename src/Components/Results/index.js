import React from 'react';
import Result from '../Result/index';

const Results = ({results, openPopup}) => {
    return (
        
        <section className='results'>
            {results.map(result => (
                <Result result={result}  key={result.imdbID} openPopup={openPopup}></Result>
            ))}


        </section>
        )
}

export default Results
