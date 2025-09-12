import Image from 'next/image'
import React from 'react'

function AddCompo() {
    return (
        <>
     <div className="border-t border-b py-6">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col justify-center gap-4">
        <div className="flex items-center justify-center rounded-lg w-full">
          <Image
            width={728}
            height={90}
            src="/Newimg/header/bottom1.jpg"
            alt="Ad"
            className="object-cover h-28 w-full rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center rounded-lg w-full">
          <Image
            width={728}
            height={90}
            src="/Newimg/header/bottom2.jpg"
            alt="Ad"
            className="object-cover h-28 w-full rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - takes 1 column */}
      <div className="col-span-1 flex items-center justify-center">
        <Image
          width={500}
          height={250}
          src="/Newimg/header/leftside2.jpg"
          alt="Ad"
          className="object-cover h-64 w-full rounded-lg"
        />
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default AddCompo
