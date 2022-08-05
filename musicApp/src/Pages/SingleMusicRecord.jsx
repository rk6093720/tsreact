import React,{useEffect, useState} from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/AppReducer/action';

const SingleMusicRecord = () => {
          // some data in the params 
          // get the id from the params 
          // filter the music albums based on the id
          // get the album pertaining to that particular id

          const {id}= useParams();
          const dispatch= useDispatch();
          const musicRecords= useSelector((state) => state.AppReducer.musicRecords)
            const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});

          useEffect(() => {
           if(musicRecords.length===0)
           {
            dispatch(getMusicRecords());
           }
          }, [dispatch, musicRecords.length]);

        useEffect(() => {
          if(id){
            const currentMusic= musicRecords.find((music ) => music.id === id);
            currentMusic && setCurrentMusicAlbum(currentMusic);
          }
        },[id, musicRecords])
        console.log(currentMusicAlbum);

  return (
    <div  key={currentMusicAlbum.id}>
        <div>{currentMusicAlbum.id}</div>
      <h1>{currentMusicAlbum.name }</h1>
      
      <div> <img src={currentMusicAlbum.img} alt={currentMusicAlbum.name} /></div>
      <div>{currentMusicAlbum.artist}</div>
      <div>{currentMusicAlbum.genre}</div>
      <div>{currentMusicAlbum.year}</div>

      <div>
          <Link to={`/album/${id}/edit`}>Edit</Link>
      </div>
    </div>
  )
}

export default SingleMusicRecord


