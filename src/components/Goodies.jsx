import React from "react";

const Goodies = () => {
  const services = [
    {
      id: 1,
      url: "/image/goodies/img1.png",
      title: "Techno T-shirt",
      description:""
    },
    {
      id: 2,
      url: "/image/goodies/img2.png",
      title: "Techno Hoodie",
    },
    {
      id: 3,
      url: "/image/goodies/img3.png",
      title: "Techno Bag",
    },
    
  ];
  return (
    <>
      <div className=" container">
        <h2 className="text-white text-center font-bold text-3xl mb-7 mt-5">OUR MERCHANDISE</h2>
        <div className="banner flex flex-wrap justify-center gap-12">
          {services.map((element) => {
            return (
              // <div className="item" key={element.id}>
              //   <h3>{element.title}</h3>
              //   <img src={element.url} alt={element.title} />
              // </div>
              <div className="text-white border border-solid border-white rounded-lg" key={element.id}>
                <img src={element.url} alt={element.title} className="h-52" />
                <div className="flex justify-center py-2">
                <h3 >{element.title}</h3>
                </div>
                <div className="flex justify-center bg-gradient-to-r from-blue-700 to-cyan-400">
                   <button>Buy Now</button>
                </div>
                 
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Goodies;
