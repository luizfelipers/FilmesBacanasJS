import React from 'react'

const Result = ({result, openPopup}) => {
    return (
        <div className='result' onClick={()=> openPopup(result.imdbID)}>
            
            <h3>{result.Title}</h3>
            <img src={result.Poster}></img>
            
        </div>
    )
}

export default Result
