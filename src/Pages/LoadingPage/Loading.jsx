import React from 'react'

function Loading() {
  return (
    <div className="bg-black w-full h-screen fixed inset-0 z-[60] flex items-center justify-center">
      <div
        className="m-12 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-mainColor-100"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Loading