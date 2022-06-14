// import React, { useState, createContext } from "react";
// import { THEME_TYPE } from "../constants";

// export const ThemeContext = createContext({
//   theme: { theme: "LIGHT" },
//   setTheme: () => console.log("theme context"),
// });

// const ThemeProvider = (props) => {
//   const [theme, setTheme] = useState({
//     theme: THEME_TYPE.LIGHT,
//   });
//   return (
//     <ThemeContext.Provider value={[theme, setTheme]}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;
