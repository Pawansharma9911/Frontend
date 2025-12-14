import React from 'react';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';



function HomePage() {
 
 
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [cookies, setCookie, removeCookie] = useCookies([]);

//   const [token, setToken] = useState(true);

//   // load token from localStorage on refresh
//   useEffect(() => {
//    if(flag==true){
//     setToken(false);
//   }
//    }, []);

//   // const login = (jwtToken) => {
//   //   localStorage.setItem("token", jwtToken);
//   //   setToken(jwtToken);
//   // };
//   const value = {token};
//   const logout = () => {
//     removeCookie("token");
//        setToken(false);
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

export default HomePage;