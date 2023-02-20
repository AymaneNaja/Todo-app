import React from "react";
 const SearchTodo=({
  SearchRef,
  findTodo
})=> {
  return <div>
      <input ref={SearchRef} className='border-2 border-blue-700 font-semibold p-2 rounded-lg outline-none' placeholder='Search Todo...' onChange={() => findTodo()}></input>

    </div>;
}
export default SearchTodo
  