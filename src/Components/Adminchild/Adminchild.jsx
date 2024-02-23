import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import DisplayMap from '../Map/DisplayMap';
import './Adminchild.css';

function Adminchild(props) {
    const [showMap, setShowMap] = useState(false);
    console.log(props.driver)

  const handleTrackVehicle = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };


  return (
    <div>
        <div className='flex border-green-500 border-2 p-4 m-10 h-72 '>
            <div className='mx-6'>
                <img src={props.driver.url} className='h-60 w-96 m-auto'></img>
            </div>
            <div className='w-72'>
                <div className='flex'>
                    <h1 className='text-green-600 m-2 '>Driver Name:</h1>
                    <h1 className='m-2'>{props.driver.Driver_Name}</h1>
                </div>
                <div className='flex' >
                    <h1 className='text-green-600 m-2'>Mobile Number :</h1>
                    <h1 className='m-2'>{props.driver.Mobile_Number}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-green-600 m-2'>Vehicle Number :</h1>
                    <h1 className='m-2'>{props.driver.Vehicle_Number}</h1>
                </div>
               <div className='flex'>
                    <h1 className='text-green-600 m-2'>Status:</h1>
                    <h1 className='m-2'>{props.driver.Status}</h1>
                </div> 
                <div className='flex'>
                    <h1 className='text-green-600 m-2'>Storage:</h1>
                    <h1 className='m-2'>{props.driver.Storage}</h1>
                </div>
                
            </div>
            <div className='flex p-10'>
                <button className='bg-green-500 m-auto p-4 rounded-full' onClick={handleTrackVehicle}>Track Vehicle</button>
            </div>
            <div className=''>
              <div className=''>
              <MdModeEdit className='inline' />
              <button className=' m-auto my-9 mx-2  hover:text-green-500'>Edit</button>
              </div>
              <div className='block'>
              <MdModeEdit className='inline' />
              <button className=' m-auto my-9 mx-2 hover:text-green-500' onClick={props.handleDelete}>Delete</button>
              </div>
              
            </div>
            
        </div>
        {showMap && (
        <div className="modal">
          <div className="modal-content">
            <DisplayMap handleCloseMap={props.handleCloseMap} center ={props.center} />
            <button className='bg-green-500 m-3 p-4 rounded-full w-20 text-white' onClick={handleCloseMap}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Adminchild