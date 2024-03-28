import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {

  const { gif , loading , fetchData } = useGif();

  return (
    <div className='w-1/2 bg-green-500 flex flex-col gap-y-5 items-center rounded-lg border border-black mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline font-bold'>A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src= {gif} width="450"></img>)
      }
      <button onClick={() => fetchData()} className='w-10/12 bg-white rounded-md text-lg py-2 mb-[20px]'>GENERATE</button>
    </div>
  )
}

export default Random