// import React, { useEffect, useState } from 'react';
// import style from "../../styles/Navbar.module.css"

// function DarkTheme() {
//     const [theme, setTheme] = useState("light");
//     useEffect(() => {
//         const currentTheme = localStorage.getItem("theme");
//         if (currentTheme) {
//             setTheme(currentTheme);
//         }
//     }, [theme]);
//     const toggleTheme = () => {
//         const newTheme = theme === "light" ? "dark" : "light";
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme);
//         const root = document.querySelector(":root");
//         if(root){
//             root.classList.toggle('dark', newTheme === "dark")
//         }
//     }
//     return (
//         <div className={`${theme}`}>
//             <button onClick={toggleTheme} className={style}>
//                 toggleTheme
//             </button>
//         </div>
//     )
// }

// export default DarkTheme