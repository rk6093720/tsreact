import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { getMusicRecords, updateMusicRecords } from '../Redux/AppReducer/action';

const EditMusicRecord = () => {
  const { id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const musicRecords= useSelector((state) => state.AppReducer.musicRecords)
  const [currentMusicAlbum, setCurrentMusicAlbum]= useState({});
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtist]= useState('');


  const handleSubmit=(e) => {
    e.preventDefault()
     if(musicName && artistName)
     {
       const payload = {
        name: musicName,
        artist: artistName
       }

       dispatch(updateMusicRecords(id, payload))
       .then(() => {
              dispatch( getMusicRecords());
              
       })
       .then(() => {
        navigate("/")
       })

     
     }

  }

  useEffect(() => {
     if(id){
      const currentMusic = musicRecords.find((music) => music.id===id);
       if( currentMusic){
        setMusicName(currentMusic.name)
        setArtist(currentMusic.artist)
       } 
     }
  }, [id, musicRecords])
console.log(currentMusicAlbum);

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit} >
      <div>
        <label >Edit Music Name </label>
        <input type="text"
        value={musicName}
        onChange={(e) => setMusicName(e.target.value)} />
      </div>
      <div>
        <label >Edit Artist Name </label>
        <input type="text" 
        value={artistName}
        onChange={(e) => setArtist(e.target.value)}/>
      </div>
      <button type='submit'>UPDATE</button>
      </form>
    </div>
  )
}

export default EditMusicRecord;