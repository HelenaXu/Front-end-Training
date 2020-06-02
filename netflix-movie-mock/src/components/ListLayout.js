import React from 'react'
import '../App.css';

// this layout is reusable, we use it in both recommendations and my list.
const ListLayout = ({renderList, listTitle, handleFunction}) => {
    console.log(listTitle);
  return (
    <div className="movie">
      <h3>{listTitle}</h3>
      <ul className='myList'>
        {renderList.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <img src={item.img} alt={item.title}/>
            <button id={item.id} onClick={() => handleFunction(item)}>
              {listTitle === "Recommendations" ? "Add" : "Remove"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListLayout;
