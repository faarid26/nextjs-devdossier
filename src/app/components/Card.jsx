'use client'
import React, {useState} from 'react'
import { FaLocationDot} from 'react-icons/fa6';
import { BsLink45Deg } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdApartment } from 'react-icons/md';
import Image from 'next/image';

const Card = ({data}) => {
  let createdDate = data ? data.created_at : null;

  let dateObject = new Date(createdDate);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let formattedDate = `Qoşuldu ${dateObject.getDate()} ${monthNames[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
  
  return (
    <div className='max-w-[90%] w-[700px] p-[40px] h-[384px] grid grid-cols-footer mt-[16px] bg-[#fefefe] dark:bg-[#1e2a47] mx-auto shadow-boxshadow rounded-[10px] laptop:flex laptop:flex-col laptop:p-[25px] laptop:h-max duration-200'>
       <Image
  src={data ? data.avatar_url : ''} 
  alt=""
  priority
  width={120}
  height={120}
  className='rounded-[50%] small-mobile:w-[70px] small-mobile:h-[70px] laptop:w-[75px] laptop:h-[75px]'
/>
        <div>
        <div className="grid grid-cols-2 gap-x-[10.5rem] h-[74px] small-mobile:grid-cols-1 laptop:h-[90px]">
          <h2 className='w-[14.063rem] text-[26px] font-[700] max-w-[15.063rem]'>
            <a href="#" className='hover:opacity-[.7] dark:text-[#fff] text-[#697c9a] duration-200'>{data ? `${data.name}` : null}</a>
          </h2>
          <p className='text-[#697c9a]  dark:text-[#fff]'>            
            {formattedDate}
          </p>
          <a href={data ? `${data.html_url}` : null} className='text-[#0079ff] cursor-pointer'>
           {data ?  `@${data.login}` : null}
          </a>
        </div>
       <div className='pdiv'>
       <p className='header col-span-4'>{data && data.bio ? data.bio : 'Bu profilin biosu yoxdur'}</p>
        <table className='w-[100%] max-w-[473px] h-[88px] rounded-[10px] bg-[#f6f8ff] dark:bg-[#141d2f] p-[20px] mt-[32px] border-separate duration-200'>
          <tbody className='text-[#697c9a] dark:text-[#fff]'>
            <tr>
              <th className='w-[33.33333%]'>Repos</th>
              <th className='w-[33.33333%]'>İzləyicilər</th>
              <th className='w-[33.33333%]'>İzləyir</th>
            </tr>
            <tr>
              <th>{data ? data.public_repos : 0}</th>
              <th>{data ? data.followers : 0}</th>
              <th>{data ? data.following : 0}</th>
            </tr>
          </tbody>
        </table>  
        <div className='mt-[30px]'>
        <ul className='grid grid-cols-2 text-[#697c9a] duration-200'>
          <li className='flex items-center gap-[11px]'>
          <FaLocationDot size={20}/>
            <p className={data && data.location ? 'text-[#697c9a] dark:text-[#fff]' : 'text-inherit'}>{data && data.location ? data.location : 'Mövcud deyil'}</p>
          </li>
          <li className='flex items-center gap-[11px] small-mobile:w-[120px] overflow-hidden'>
          <BsLink45Deg size={22}/>
            <a href={data && data.blog ? data.blog : null} className={data && data.blog ? 'text-[#697c9a] dark:text-[#fff]' : 'text-inherit'}>{data && data.blog ? data.blog : 'Mövcud deyil'}</a>
          </li>
          <li className='flex items-center gap-[11px]'>
          <AiOutlineTwitter size={20}/>
            <p className={data && data.twitter_username ? 'text-[#697c9a] dark:text-[#fff]' : 'text-inherit'}>
  {data && data.twitter_username ? data.twitter_username : 'Mövcud deyil'}
</p>
          </li>
          <li className='flex items-center gap-[11px]'>
          <MdApartment size={20}/>
            <p className={data && data.company ? 'text-[#697c9a] dark:text-[#fff]' : 'text-inherit'}>{data && data.company ? data.company : 'Mövcud deyil'}</p>
          </li>
        </ul>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Card;