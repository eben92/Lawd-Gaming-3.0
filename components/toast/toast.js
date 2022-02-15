import React from "react";

const Toast = ({ bgColor, title, msg, handleShow }) => {
  return (
    <div className='flex space-x-2 justify-center fixed right-0 mt-3 mr-3'>
      <div
        className={`${bgColor} shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block`}
        id='static-example'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
        data-mdb-autohide='false'
      >
        <div
          className={`${bgColor} flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg `}
        >
          <p className='font-bold text-white'>{title}</p>
          <div className='flex items-center'>
            <button
              type='button'
              className=' btn-close box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
              data-mdb-dismiss='toast'
              aria-label='Close'
              onClick={handleShow}
            >
              x
            </button>
          </div>
        </div>
        <div className={`p-3 ${bgColor} rounded-b-lg break-words text-white`}>
          {msg}
        </div>
      </div>
    </div>
  );
};

export default Toast;
