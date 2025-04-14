import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

const Referral = () => {
    const amount = 201
  return (
    <div className='pt-3 md:pt-10 flex flex-col gap-3'> 
        <div className='flex gap-1 md:gap-4  items-center'>
        <h1 className='pl-[26px] text-[15px] md:text-[20px] font-semibold'>Permes Laundry</h1>
        <p className='text-[9px]'> Easy loans for your every need 🌟</p>
        </div>
        <div className='border border-neutral-400 w-full'></div>
        
<div className='flex flex-col items-center w-full h-[100vh]'>
<div className=' flex flex-col items-center gap-9 p-5 md:p-2 pt-[20px] border-neutral-600 w-[340px]  md:w-[500px] min-h-[200px] rounded-md'>
    <p>Your Current Balance</p>
    <p className='flex items-center text-[20px] font-semibold'><TbCurrencyNaira className='text-[25px]' />{amount}</p>
    <div className='flex flex-col gap-1'>
   
    {amount > 200 ? <button className='p-3 bg-yellow-700 text-white text-[15px] w-full rounded-full'>Request Withdrawal</button> : <button disabled className='p-3 bg-yellow-600 text-white text-[15px] w-full rounded-full cursor-not-allowed'>Request Withdrawal</button> }
    <p className='text-[9px] text-red-400 md:text-[12px]'>Note: You can only request a withdraw when your balance is up to 200</p>
    </div>
</div>
</div>
      
    </div>
  )
}

export default Referral
