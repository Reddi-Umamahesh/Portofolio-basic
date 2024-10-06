import React from 'react'
import image from '../assets/uma.jpg'
import { Button } from './ui/button';
import { Download } from 'lucide-react';
const Profile:React.FC = () => {
  return (
    <div className=" p-10 w-full flex flex-wrap justify-center items-center gap-12 mb-10">
      <div className="h-[400px] w-[300px] bg-gray-800 rounded-lg lg:h-[450px] lg:w-[350px]">
        <img
          className=" w-full h-full object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>

      <div className="min-w-[300px] lg:max-w-[600px] ">
        <div className="w-auto lg:w-full lg:pt-12">
          <h1
            className=" font-semibold
         text-3xl lg:text-4xl"
          >
            Hello,
          </h1>
          <h1 className="text-2xl font-medium pb-2 lg:text-3xl">
            I AM A WEB DEVELOPER
          </h1>

          <p className=" font-light py-2 lg:text-lg">
            I am a web developer with a passion for creating engaging and
            user-friendly websites. My goal is to transform ideas into reality
            by leveraging the latest technologies and best practices. I believe
            in continuous learning and improving my skills to deliver the best
            solutions for my clients.
          </p>
          <hr className="my-4 lg:my-6" />
          <div className="my-2 lg:my-4 lg:text-lg flex flex-wrap gap-4">
            <div className='flex gap-8'>
              <span className="flex gap-8">
                <p className="font-semibold">NAME</p> <p>Umamahesh</p>
              </span>
              <span className="flex gap-8">
                <p className="font-semibold">EMAIL</p>{" "}
                <p>reddiumamaheshwararao@gmail.com</p>
              </span>
            </div>
            <div className='flex gap-28'>
              <span className="flex gap-12">
                <p className="font-semibold">OLD</p> <p>20</p>
              </span>
              <span className="flex gap-2">
                <p className="font-semibold">ADDRESS</p> <p>Hyderabad ,India</p>
              </span>
            </div>
          </div>
          <Button className="w-48  rounded-3xl my-4 lg:w-52 h-[46px]">
            <Download className="w-4 h-4 mr-2" />
            <p className="text-sm">DOWNLOAD CV</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile