import React from "react";

const About = () => {
  const services = [
    {
      id: 1,
      url: "/image/facultyheads/img1.png",
      title: "Dr. Shiva Prakash",
      description:"Faculty President"
    },
    {
      id: 2,
      url: "/image/facultyheads/img2.png",
      title: "Dr. Dayashankar Singh",
      description:"Faculty Vice President"
    },
    {
      id: 3,
      url: "/image/facultyheads/img3.png",
      title: "Dr. Rajendra Kumar Dwivedi",
      description:"Faculty Secretary"
    },
    {
      id: 3,
      url: "/image/facultyheads/img4.png",
      title: "Dr. Jay Prakash",
      description:"Faculty Treasurer"
    }
    
  ];
  const student = [
    {
      id: 1,
      url: "/image/studentheads/img1.png",
      title: "Shivam Verma",
      description:"Student Secretary"
    },
    {
      id: 2,
      url: "/image/studentheads/img2.png",
      title: "Hardik Dwivedi",
      description:"Student Joint Treasurer"
    },
    {
      id: 3,
      url: "/image/studentheads/img3.png",
      title: "Himanshu Dubey",
      description:"Student Joint Secretary"
    },
   
    
  ];
  return (
    <>
      <div name="about" className=" container bg-gradient-to-b from-black to-slate-800">
        <h2 className="text-white text-center font-bold text-3xl mt-5 mb-7">ABOUT US</h2>
        <p className="text-white text-center text-1xl">Founded in the year 2013, by Alumni Respected Ankit Porwal and Vivek Samele. The Society organizes personality development programs such as seminars, 
workshops, and Language classes for the students to learn from their seniors.</p>
        <h2 className="text-white font-bold text-2xl mt-6 mb-5 ml-16">Faculty Heads</h2>

        <div className="banner flex flex-wrap justify-center gap-12">
          {services.map((element) => {
            return (
              // <div className="item" key={element.id}>
              //   <h3>{element.title}</h3>
              //   <img src={element.url} alt={element.title} />
              // </div>
              <div className="text-white" key={element.id}>
                <div className="flex justify-center">
                 <img src={element.url} alt={element.title} className="h-20 w-20 rounded-full" />
                </div>
                <h3 className="text-sm">{element.title}</h3>
                <h4 className="text-sm">{element.description}</h4>
              </div>
            );
          })}
        </div>
        <h2 className="text-white font-bold text-2xl mt-6 mb-5 ml-16">Student Leaders</h2>
        <div className="banner flex flex-wrap justify-center gap-12">
          {student.map((element) => {
            return (
              // <div className="item" key={element.id}>
              //   <h3>{element.title}</h3>
              //   <img src={element.url} alt={element.title} />
              // </div>
              <div className="text-white" key={element.id}>
                <img src={element.url} alt={element.title} className="h-20 w-20 rounded-full" />
                <h3 className="text-sm">{element.title}</h3>
                <h4 className="text-sm">{element.description}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
