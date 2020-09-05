import React, { Component } from 'react';

import spotify from '../../utils/api';
import * as auth from '../../utils/auth';

import { Link } from 'react-router-dom';

import { Back, AlbumContainer, Player } from './styles';

import { FaChevronLeft } from 'react-icons/fa';

const Album = () => {
  return (
    <>
      <FaChevronLeft /><Link to={`/search#access_token=${sessionStorage.getItem('access_token')}`}>Voltar</Link>

      <AlbumContainer>
        <div id="album-cover">        
          <img src={cover} alt="Album Cover"/>
          <p id="album-name">{album}</p>
          <p id="artist-name">{artist}</p>
        </div>
        

        <div id="album-tracks">
          <ol>
            {tracks.map(track => (
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