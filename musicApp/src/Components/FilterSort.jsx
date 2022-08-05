// import React,{useState, useEffect} from 'react';
// import { useSearchParams} from "react-router-dom";
// const FilterSort = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//      const initialGenreParams = searchParams.getAll("genre");
//      const initialSortParams =  searchParams.get("sortBy")
//   const [ category, setCategory] = useState(initialGenreParams || []);
//     const [ sortBy, setSortBy] = useState( initialSortParams || "");

//     const handleSortBy=(e)=>{
//      setSortBy(e.target.value);
//     }


//     const handleGenreChange = (e) => {
//       const option = e.target.value;
//       //  if the option is already present in the category remove it
//       //  else add  it in the category array

//       let newCategory =[...category];
//       if(category.includes(option)){
//            // remove it
//            newCategory.splice(newCategory.indexOf(option),1);
//       }else{
//           // add it
//           newCategory.push(option)
//       }
//       setCategory(newCategory);
//     };
//     // console.log(category);

//     useEffect(() => {
//       // if the category changes then reflect it on the url search as well
//       if(category || sortBy){
//         setSearchParams( {  genre:category, sortBy:sortBy});
//       }
//     }, [category, setSearchParams, sortBy])

// console.log(searchParams.getAll("genre"));
// console.log(sortBy);
//   return (
//     <div>
//       <h3>FILTER</h3>
//     <div>
//         <input type="checkbox"
//         value="K-Pop"
//         defaultChecked={category.includes('K-Pop')}
//          onChange={handleGenreChange}  />
//         <label >K-Pop</label>
//     </div>
//     <div>
//         <input type="checkbox"
//          defaultChecked={category.includes('Country')}
//         value="Country"
//         onChange={handleGenreChange} />
//         <label >Country</label>
//     </div>
//     <div>
//         <input type="checkbox" 
//       defaultChecked={category.includes('Country')}

//         value="Pop"
//         onChange={handleGenreChange} />
//         <label >Pop</label>
//     </div>
//     <div>
//         <input type="checkbox"
//          defaultChecked={category.includes('Hard-Rock')}
//          value="Hard-Rock"
//          onChange={handleGenreChange} />
//         <label >Hard-Rock</label>
//     </div>
//     <div>
//         <input type="checkbox"
//        defaultChecked={category.includes('Holiday')}
//         value="Holiday"
//          onChange={handleGenreChange} />
//         <label >Holiday</label>
//     </div>
 
  
//     <div>
//         <input type="checkbox"
//       defaultChecked={category.includes('Heavy Metal')}
//         value="Heavy Metal"
//          onChange={handleGenreChange} />
//         <label>Heavy Metal</label>
//     </div>



//       <h3>SORT</h3>
//       <div  onChange={handleSortBy }>
//         <div>
//              <input type="radio" 
//              value="asc"
//              name='sortBy' 
//              defaultChecked={sortBy==="asc"}/>
//              <label >Ascending</label>
//         </div>
//         <div>
//              <input type="radio" 
//              value="desc"
//              name='sortBy'
//              defaultChecked={sortBy==="desc"}/>
//              <label >Descending</label>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FilterSort


import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    //if the option is already present in the category, remove it
    //else add it in the category array
    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    //if the category changes then reflect it on the URL search as well
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handleGenreChange}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Country")}
          value="Country"
          onChange={handleGenreChange}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Pop")}
          value="Pop"
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Holiday")}
          onChange={handleGenreChange}
          value="Holiday"
        />
        <label>Holiday</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Heavy Metal"
        />
        <label>Heavy Metal</label>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;