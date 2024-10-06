import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className="flex h-[10vh]   justify-between items-center px-5 py-5 top-0   z-10 bg-transparent backdrop-blur-sm text-white w-full">
      <div className="text-4xl  cust-md:block hidden mx-auto font-dancing ">Umamahesh</div>

      <div className="cust-md:w-auto mx-auto">
        <div className="flex gap-6  justify-center cust-md:justify-around cust-md:text-xl text-white lg:gap-10">
          <p className="custom-underline cursor-pointer">Home</p>
          <p className="custom-underline cursor-pointer">About</p>
          <p className="custom-underline cursor-pointer">skills</p>
          <p className="custom-underline cursor-pointer">services</p>
          <p className="custom-underline cursor-pointer">work</p>
          <p className="custom-underline cursor-pointer">Connect</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar