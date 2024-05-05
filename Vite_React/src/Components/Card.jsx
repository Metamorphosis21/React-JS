import React from 'react'

function Card({model="Laptop", imgsrc="Laptop_Img", btn="Go to Website"}) {       // function Card(props) & default parameter if no argument is passed

  return (
    <div class="w-[500px] rounded-md border">
        <img
          src={imgsrc}                      // src={props.imgsrc}
          alt="Laptop"
          class="h-[400px] w-full rounded-t-md object-cover"/>
        <div class="p-5">
          <h1 class="inline-flex items-center text-lg font-semibold">
            About {model}  {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p class="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <div class="mt-4">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Macbook
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Apple
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Laptop
            </span>
          </div>
          <button
            type="button"
            class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {btn}                            {/*    {props.btn} */}
          </button>
        </div>
      </div>
  )
}

export default Card



// old way - props.propertyName
// new way - destructuring {propertyName}