// import React from "react";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";

//  const TabComp = () => {
//   const data = [
//     {
//       label: "Dashboard",
//       value: "dashboard",
//       icon: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M12 16V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M15 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       </svg>`,
//       desc: `It really matters and then like it really doesn't matter.
//       What matters is the people who are sparked by it. And the people
//       who are like offended by it, it doesn't matter.`,
//     },
//     {
//       label: "Profile",
//       value: "profile",
//       icon: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M12 16V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M15 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       </svg>`,
//       desc: `Because it's about motivating the doers. Because I'm here
//       to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
//     {
//       label: "Settings",
//       value: "settings",
//       icon: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M12 16V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       <path d="M15 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       </svg>`,
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//   ];
//   return (
//     <Tabs value="dashboard">
//       <TabsHeader>
//         {data.map(({ label, value, icon }) => (
//           <Tab key={value} value={value}>
//             <div className="flex items-center gap-2">
//               {React.createElement(icon, { className: "w-5 h-5" })}
//               {label}
//             </div>
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody>
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value}>
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }

// export default TabComp;