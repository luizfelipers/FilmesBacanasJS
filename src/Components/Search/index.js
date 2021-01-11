import React from 'react'

const Search = ({ handleInput, search  }) => {
    return (
        <section className='searchbox-wrap'>
            <input 
            className='searchbox'
             type='text'
              placeholder='Pesquise por um filme bacana...'
              onChange={handleInput}
              onKeyPress={search}
              ></input>
        </section>
    )
}

export default Search
