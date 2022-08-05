import React from 'react'
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";
const Homepage = () => {
  return (
    
      <HomepageWrapper>
        <FilterSortWrapper>
        <FilterSort/>
        </FilterSortWrapper>
        <MusicRecordsWrapper>
        <MusicRecords/>
        </MusicRecordsWrapper>
        </HomepageWrapper>
    
  )
}

export default Homepage;


const HomepageWrapper = styled.div`
  display: flex;
  height: 100vh;


`

const FilterSortWrapper= styled.div`
   width: 250px;
   border: 2px solid red;
  
`

const MusicRecordsWrapper= styled.div`
display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat( 4, 310px);
  grid-gap:20px;
  border:2px solid black;
  width:100%;
  height:100vh;
 grid-template-columns: repeat(auto-fit, minmax(310px,max-content));

 justify-content:center;
 padding:initial;
 
 

`