import React from "react";
export function Addbtn({
  setpop
}) {
  return <div>
          <button onClick={() =>setpop(true)} className='addbtn bg-blue-700 transition-all border-2 border-blue-700 hover:text-black hover:bg-violet-50  rounded-md p-2  text-white'>ADD TODO</button> 

    </div>;
}
  