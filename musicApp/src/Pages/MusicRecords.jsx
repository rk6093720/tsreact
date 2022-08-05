import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getMusicRecords } from '../Redux/AppReducer/action'
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MusicRecords = () => {
   const dispatch= useDispatch();
 const musicRecords = useSelector((state) => state.AppReducer.musicRecords);
   const [searchParams] = useSearchParams();
   const location = useLocation();
    useEffect(() => {  // useeffect do  the mounting work 
        if( location || musicRecords.length ===0)
        {
          const sortBy = searchParams.get("sortBy")
          const queryParams ={
            params:{
              genre:searchParams.getAll("genre"),
              _sort:sortBy && "year",
              _order:sortBy,
            },
          };
     dispatch( getMusicRecords(queryParams)); // for a minimun of 1 time run and also value change
        }
    }, [location.search])
    // console.log(musicRecords); 
  return (
    <>
        {
            musicRecords?.length > 0 && musicRecords.map((music) => 
            {
               return <MusicRecordWrapper key={music.id}> 
               <Link to={`/album/${music.id}`}>
               <div>{music.name} </div>
               <div> <img src={music.img} alt={music.name} />  </div>
               <div>{music.genre} </div>
               <div> {music.artist}</div>
               <div>{music.year} </div>

               
               </Link>
               </MusicRecordWrapper>
            }) 
        }
    </>
  )
}

export default MusicRecords;

const MusicRecordWrapper= styled.div`
  width:300px;
  border:2px solid green;
  

`