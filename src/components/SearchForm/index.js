import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-lodash-debounce'

import * as auth from '../../utils/auth';
import spotify from '../../utils/api';

import { FaSearch } from 'react-icons/fa';

import { SearchFormWrapper, Albums } from './styles';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    const url = window.location.href;

    const access_token = url.match(/#(?:access_token)=([\S\s]*?)&/)[1];

    setAccessToken(access_token);
    localStorage.setItem('@Spotfinder:access_token', JSON.stringify(access_token));
  }, []);

  useEffect(() => {
    async function handleLoadQuery() {
      try {
        const response = await spotify.get(`/search?q=${query}&type=album&limit=15`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });

        const searchResults = response.data.albums.items;
        console.log(searchResults);
        setQueryResults(searchResults);
      } catch(err) {
        if (err) {
          const responseError = err.response.request.response;

          if (responseError.includes("The access token expired")) {
            alert('Token expirado, Redirecionando para a página de login.');
              
            window.location.href = auth.loginUrl();
          }
        }
      }
    }
    handleLoadQuery();
  }, [debouncedValue, accessToken]);

  return (
    <>
      <SearchFormWrapper>
        <input 
          type="text" 
          placeholder="Pesquisar por álbum"
          onChange={e => setQuery(e.target.value)}
        />
        <FaSearch color={'#fff'} fontSize={'2rem'} />
      </SearchFormWrapper>

      <Albums>
        {queryResults.map(queryResult => (
          <div className="album" key={queryResult.id}>
            <Link to={`/album/${queryResult.id}#access_token=${localStorage.getItem('@Spotfinder:access_token')}`}>
              <img src={queryResult.images[0].url} alt="Album Cover"/>
              <p className="album-name">{queryResult.name}</p>
              <p className="album-artist">{queryResult.artists[0].name}</p>
            </Link>
          </div>
        ))}
        </Albums>
    </>
  )
}

export default SearchForm;