import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/image/events/img1.jpg",
      title: "Dancing",
    },
    {
      id: 2,
      url: "/image/events/img2.jpg",
      title: "Singing",
    },
    {
      id: 3,
      url: "/image/events/img3.jpg",
      title: "Tamboola",
    },
    {
      id: 4,
      url: "/image/events/img4.jpg",
      title: "Carrom",
    },
    {
      id: 5,
      url: "/image/events/img5.jpg",
      title: "Poetry",
    },
    {
      id: 6,
      url: "/image/events/img3.jpg",
      title: "Solo Singing",
    },
  ];
  return (
    <>
      <div name="services" className=" container">
        <h2 className="text-white text-center font-bold text-3xl m-7 tracking-widest ">EVENTS</h2>
        <div className="banner flex flex-wrap justify-center gap-12 items-center">
          {services.map((element) => {
            return (
              // <div className="item" key={element.id}>
              //   <h3>{element.title}</h3>
              //   <img src={element.url} alt={element.title} />
              // </div>
              <div className="text-white border border-solid border-white rounded-3xl" key={element.id}>
                <img src={element.url} alt={element.title} className="h-40 w-60" />
                <div className="flex justify-center">
                  <h3>{element.title}</h3>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
