import React, { useEffect, useState } from 'react';

import spotify from '../../utils/api';
import * as auth from '../../utils/auth';

import { Link, useParams } from 'react-router-dom';

import { Back, AlbumContainer, Player } from './styles';

import { FaChevronLeft } from 'react-icons/fa';

const Album = () => {
  const [album, setAlbum] = useState([]);
0
  useEffect(() => {
    const url = window.location.href;

    const albumId = url.split('/')[4].split('#')[0];

    async function handleLoadQuery() {
      try {
        const response = await spotify.get(`albums/${albumId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });

        const albumQuery = response.data;
        console.log(albumQuery);
        setAlbum(albumQuery)
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
  }, [album]);

  return (
    <>
      <FaChevronLeft /><Link to={`/search#access_token=${sessionStorage.getItem('access_token')}`}>Voltar</Link>

      <AlbumContainer>
        <div id="album-cover">        
          <img src={album.images[0].url} alt="Album Cover"/>
          <p id="album-name">{album.name}</p>
          <p id="artist-name">{album.artists[0].name}</p>
        </div>
        

        <div id="album-tracks">
          <ol>
            {album.tracks.items.map(track => (
              <li onClick={this.handleTrackClick} key={track.id} preview={track.preview_url}>{track.name} 
                <span>
                  {Math.floor(track.duration_ms/60000) + ':' + (((track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + ((track.duration_ms % 60000) / 1000).toFixed(0) } 
                </span>
              </li>
            ))}
          </ol>
        </div>
      </AlbumContainer>

      <Player controls>
        <source src={currentTrack} />
      </Player>
    </>
  )
}