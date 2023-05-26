// import React, { useState, useReducer } from 'react';
// import style from "../styles/Navbar.module.css";

// const Dropdown = ({ id, content, title }) => {
//   const [isOpen, toggleDropdown] = useReducer((state) => !state, false);

//   return (
//     <div>
//       <div className='flex'>
//       <button onClick={toggleDropdown}>{title} {id}</button>
//       <button><svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-4 h-4"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//         />
//       </svg></button>
//       </div>
//       {isOpen && (
//         <div>
//           <p>{content}</p>
//           <div className={style.dropMenuMobile}>
//                             <p>Home 1</p>
//                             <p>Home 2</p>
//                             <p>Header 1</p>
//                             <p>Header 2</p>
//                             <p>Coming Soon</p>
//                         </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Drop = () => {
//   const dropdowns = [
//     { id: 1, content: 'Home Page', title: "TEMPLATES" },
//     { id: 2, content: 'Content 2', title: "title 2" },
//     { id: 3, content: 'Content 3', title: "title 3" },
//     // ...
//     { id: 10, content: 'Content 10', title: "title 4" }
//   ];

//   return (
//     <div>
//       {dropdowns.map((dropdown) => (
//         <Dropdown key={dropdown.id} id={dropdown.id} content={dropdown.content} title={dropdown.title} />
//       ))}
//     </div>
//   );
// };

// export default Drop;

// import React, { useState } from 'react';
// // import { ReactComponent as ChevronDownIcon } from './chevrondown.svg';

// const Dropdown = ({ id, content, subDropdown }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleDropdown} className="dropdown-button">
//         {content}
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//             />
//           </svg>
//         </button>
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           <p>{content} dropdown content</p>
//           {subDropdown && <Dropdown id={subDropdown.id} content={subDropdown.content} />}
//         </div>
//       )}
//     </div>
//   );
// };

// const Drop = () => {
//   const dropdowns = [
//     { id: 1, content: 'TEMPLATES', subDropdown: { id: 11, content: 'Sub Dropdown 1' } },
//     { id: 2, content: 'Dropdown 2', subDropdown: { id: 22, content: 'Sub Dropdown 2' } },
//     { id: 3, content: 'Dropdown 3', subDropdown: { id: 33, content: 'Sub Dropdown 3' } },
//     // ...
//     { id: 10, content: 'Dropdown 10', subDropdown: { id: 101, content: 'Sub Dropdown 10' } }
//   ];

//   return (
//     <div>
//       {dropdowns.map((dropdown) => (
//         <Dropdown key={dropdown.id} id={dropdown.id} content={dropdown.content} subDropdown={dropdown.subDropdown} />
//       ))}
//     </div>
//   );
// };

// export default Drop;

import React, { useState } from 'react';
import style from "../../styles/Navbar.module.css";

const Dropdown = ({ title, subDropdowns }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={style.dropMenu} onClick={toggleDropdown}>
      <span>
        {title}
      </span>
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
        <div className={style.dropMenuMobile}>
          {subDropdowns.map((subDropdown, index) => (
            <Dropdown key={index} title={subDropdown.title} subDropdowns={subDropdown.subDropdowns} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownMobile = () => {
  const dropdowns = [
    {
      title: 'TEMPLATES',
      subDropdowns: [
        {
          title: 'Home Page',
          subDropdowns: [
            { title: 'Home 1', subDropdowns: [] },
            { title: 'Header 2', subDropdowns: [] },
            { title: 'Coming Soon', subDropdowns: [] },
          ],
        },
        {
          title: 'Shop Pages',
          subDropdowns: [
            { title: 'Category Page 1', subDropdowns: [] },
            { title: 'Product Page 1', subDropdowns: [] },
            { title: 'Cart Page', subDropdowns: [] },
          ],
        },
        {
          title: 'Other Pages',
          subDropdowns: [
            { title: 'Checkout Page', subDropdowns: [] },
            { title: 'Search Page', subDropdowns: [] },
            { title: 'Coming Soon', subDropdowns: [] },
          ],
        },
        {
          title: 'Blog Page',
          subDropdowns: [
            { title: 'Blog Page', subDropdowns: [] },
            { title: 'log Single', subDropdowns: [] },
            { title: 'About Page', subDropdowns: [] },
            { title: 'Contact Page', subDropdowns: [] },
            { title: 'Login', subDropdowns: [] },
            { title: 'Signup', subDropdowns: [] },
          ],
        },
      ],
    },
    {
      title: 'Explore',
      subDropdowns: [
        { title: 'Home Demo 1', subDropdowns: [] },
        { title: 'Home Demo 2', subDropdowns: [] },

        {
          title: 'Category Pages',
          subDropdowns: [
            { title: 'Category Page 1', subDropdowns: [] },
            { title: 'Category Page 2', subDropdowns: [] }
          ],
        },

        {
          title: 'Product Page',
          subDropdowns: [
            { title: 'Product detail 1', subDropdowns: [] },
            { title: 'Product detail 2', subDropdowns: [] }
          ],
        },
        { title: 'Checkout Pages', subDropdowns: [] },
        { title: 'Search Pages', subDropdowns: [] },

        {
          title: 'Other Page',
          subDropdowns: [
            { title: 'About', subDropdowns: [] },
            { title: 'Contact us', subDropdowns: [] },
            { title: 'Login', subDropdowns: [] },
            { title: 'Signup', subDropdowns: [] },
            { title: 'Subscription', subDropdowns: [] }
          ],
        },

        {
          title: 'Blog Page',
          subDropdowns: [
            { title: 'Blog Page', subDropdowns: [] },
            { title: 'Blog Single', subDropdowns: [] }
          ],
        }
      ],
    },
  ];

  return (
    <div>
      {dropdowns.map((dropdown, index) => (
        <Dropdown key={index} title={dropdown.title} subDropdowns={dropdown.subDropdowns} />
      ))}
    </div>
  );
};

export default DropdownMobile;
