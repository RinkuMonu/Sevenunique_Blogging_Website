import Image from 'next/image'
import React from 'react'

export default function AdsSection() {
    return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                        <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                    </div>  
                    <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>

                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>


                </div>
            
      <hr className="w-full h-2 mt-6" />
      <hr className="w-full h-2 -mt-1" />
        </>
    )
}
