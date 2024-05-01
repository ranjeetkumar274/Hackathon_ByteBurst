import "./App.css";
import React from "react";
//import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Box from "./components/Box";
import Box1 from "./components/Box1";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Name />
    },
    {
      path: "/contact",
      element:<Box/>
    },
    {
      path: "/Signup",
      element:<Box1/>
    }
  ])
  
  return (
    
    <>
      <RouterProvider router={router}/>
    </>
     

  )
}

export default App;

// const App = () => {
//   return (
// //     <Router>
//       <Navbar />
//       <HeroSection />
//       <Services />
//       <About />
//       <Contact />
//       <Footer />
//       <Toaster />
//       <Switch>
//           <Route path="/contact">
//             <Contact />
//           </Route>
         
//       </Switch>
//     </Router>

//     // <Router>
//     //   <Switch>
//     //     <Route path="/">
         
//     //         <Navbar />
//     //       <HeroSection />
//     //       <Services />
//     //       <About />
//     //       <Footer />
//     //       <Toaster />
          
//     //     </Route>
//     //       <Route path="/contact">
//     //         <Contact />
//     //       </Route>
          
//     //     </Switch>
      
//     // </Router>
//   );
// };

// export default App;

// const AppLayout = () => {
//   return (
//     <React.Fragment>
//       <HeroSection/>
//       <Outlet />
//       <Footer />
//     </React.Fragment>
//   );
// };

// // call createBrowserRouter for routing different pages
// const App = createBrowserRouter([
//   {
//     path: "/", // show path for routing
//     element: <AppLayout />, // show component for particular path
//     errorElement: <Error />, // show error component for path is different
//     children: [
//       // show children component for routing
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
      
//     ],
//   },
 
// ]);

