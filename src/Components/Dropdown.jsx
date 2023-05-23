// import React, { useState } from 'react';
// import style from "../styles/Navbar.module.css";

// const Dropdown = ({ id }) => {
//   const [dropdowns, setDropdowns] = useState({});

//   const toggleDropdown = () => {
//     setDropdowns((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id]
//     }));
//   };

//   return (
//     <div>
//       <button onClick={toggleDropdown}>Home Page {id}</button>
//       {dropdowns[id] && (
//         // <div>
//         //   <p>Home {id} Page</p>
//         //   {/* اینجا محتوای دراپ داون {id} را بنویسید */}
//         // </div>
//         <>
//         <div className={style.dropMenu}>
//           <span>Home Page {id}</span>
//           <button>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-4 h-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className={style.dropMenuMobile}>
//                     <p>Home 1</p>
//                     <p>Home 2</p>
//                     <p>Header 1</p>
//                     <p>Header 2</p>
//                     <p>Coming Soon</p>
//                   </div>
//         </>
//       )}
//     </div>
//   );
// };

// const Drop = () => {
//   const dropdownCount = 10; // تعداد دراپ داون‌ها

//   return (
//     <div>
//       {Array.from(Array(dropdownCount), (e, index) => (
//         <Dropdown key={index} id={index + 1} />
//       ))}
//     </div>
//   );
// };

// export default Drop;

import React, { useState } from 'react';
import style from "../styles/Navbar.module.css";

const Dropdown = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className={style.itemsDropMenu}>
      <div className={style.dropMenu}>
        <div className="flex flex-row">
          <button onClick={toggleDropdown}>Home Page</button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        </div>
        {isOpen && (
          <div className='flex flex-column'>
            {/* <p>Dropdown {index + 1} content</p> */}
            <div className={style.dropMenuMobile}>
              <p>Home 1</p>
              <p>Home 2</p>
              <p>Header 1</p>
              <p>Header 2</p>
              <p>Coming Soon</p>
            </div>
            {/* اینجا محتوای دراپ داون {index + 1} را بنویسید */}
          </div>
        )}
        
      </div>
    </div>
  );
};

const Drop = () => {
  const dropdownCount = 1; // تعداد دراپ داون‌ها

  return (
    <div>
      {Array.from(Array(dropdownCount), (e, index) => (
        <Dropdown key={index} index={index} />
      ))}
    </div>
  );
};

export default Drop;
