import React from 'react'
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../../public/images/image2.png";
import Header from '../../../components/Header';
import Link from 'next/link';
const page = () => {
  return (
    <div>
    <Header/>
       {/* cards  */}
       <div className="w-full my-10">
        <div className="p-4">
        
          <div className="grid grid-cols-4 justify-evenly gap-4">
            {/* card 1 */}
            <div className=" border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga
              </p>
              <Link href="/blogs/1" className="text-green-500 p-2">Read More</Link>
            </div>
            {/* card 2 */}
            <div className=" border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga 
              </p>
              <button className="text-green-500 p-2">Read More</button>
            </div>
            {/* card 3 */}
            <div className=" border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga
              </p>
              <button className="text-green-500 p-2">Read More</button>
            </div>
            {/* card 4 */}
            <div className=" border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga 
              </p>

              <button className="text-green-500 p-2">Read More</button>
            </div>
             {/* card 5 */}
             <div className=" border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga 
              </p>

              <button className="text-green-500 p-2">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
