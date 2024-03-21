'use client';

import Image from "next/image";
import "./globals.css";
import logo from './images/logo.jpg'
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  //get day, month, year
  const [cDay, setDay] = useState(0)
  const [cMonth, setMonth] = useState(0)
  const [cYear, setYear] = useState(0)
  const isLeapYear = cYear % 4 === 0

  const dayHandler = (e: any) => {
    setDay(Number(e.target.value))
  };

  const monthHandler = (e: any) => {
    setMonth(Number(e.target.value))
  }

  const yearHandler = (e: any) => {
    setYear(Number(e.target.value))
  }

  //show data code
  var styleED = 'text-transparent'
  var styleEM = 'text-transparent'
  var styleEY = 'text-transparent'


  var styleM = 'bg-purple-600 w-16 h-5 mt-auto mb-auto';
  if (cMonth > 0 && cMonth <= 12) { styleM = '' };

  var styleY = 'bg-purple-600 w-16 h-5 mt-auto mb-auto';
  if (cYear > 1924 && cYear <= 2024) { styleY = '' }

  var styleD = 'bg-purple-600 w-16 h-5 mt-auto mb-auto';
  const maxDays = isLeapYear ? 28 : 29

  if (cDay !== 0 && cMonth !== 0) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(cMonth)) {
      if (cDay > 0 && cDay <= 31) { styleD = '' }
    } else if (cMonth === 2) {
      // TODO: Account for leap years
      if (cDay > 0 && cDay <= maxDays) { styleD = '' };
    }
    else {
      if (cDay > 0 && cDay <= 30) { styleD = '' };
    }

  }
  else {
    if (cDay > 0 && cDay <= 31) { styleD = '' }
    else if (cDay !== 0) {
      styleED = ' text-red-600 bg-red-100 p-2 rounded-lg mt-2'
    }
  }

  if (cDay !== 0 && styleD !== '') {
    styleED = ' text-red-600 bg-red-100 p-2 rounded-lg mt-2'

  }

  if (cMonth !== 0 && styleM !== '') {
    styleEM = ' text-red-600 bg-red-100 p-2 rounded-lg mt-2'

  }

  if (cYear !== 0 && styleY !== '') {
    styleEY = ' text-red-600 bg-red-100 p-2 rounded-lg mt-2'

  }

  //currettime
  const d = new Date();
  var year = d.getFullYear();
  var day = d.getDate();
  var month = d.getMonth();


  if (day > 0) { month++ }

  var cM = month - cMonth;
  var cD = day - cDay;
  var cY = year - cYear;
  if (cD < 0) {
    cD *= -1
  }

  if (cM < 0) {
    cM *= -1
  }

  if (cM >= 1 && cMonth > 0) { cY--; cM = 12 - cM }




  return (
    <div>
      <div className=" bg-white rounded-3xl m-auto mt-28 whitebox w-7/12 shadow-sm h-fit">

        <div className=" flex gap-x-9 p-11 font-semibold tracking-widest">
          <div className=''><label>DAY</label>
            <br />
            <br />
            <input type="number" min={0} className=" border-2 w-24 h-12 p-4" placeholder="DD" onChange={dayHandler} /><div className={styleED}>Kindly enter correct day</div> </div>



          <div><label>MONTH</label>
            <br />
            <br />
            <input type="number" min={0} className=" border-2 w-24 h-12 p-4" placeholder="MM" onChange={monthHandler} /><div className={styleEM}>Kindly enter correct month</div></div>

          <div><label>YEAR</label>
            <br />
            <br />
            <input type="number" className=" border-2 w-24 h-12 p-4" placeholder="YY" onChange={yearHandler} /><div className={styleEY}>Kindly enter correct year</div></div>
        </div>

        <div className="flex"><div className=" bg-black w-2/3 m-auto ml-20 line"></div> <Image src={logo} alt="image" className=" mr-32" />

        </div>

        <div className="flex gap-5 pl-10 pr-10">
          {styleY === '' && (<div className=" text-purple-600 font-extrabold text-6xl">{cY}</div>)}
          <div className={styleY}></div>
          <div className={styleY}></div>
          <em className=" text-7xl mb-5 font-bold">years</em>
        </div>


        <div className="flex gap-5 pl-10 pr-10">
          {styleM === '' && (<div className=" text-purple-600 font-extrabold text-6xl">{cM}</div>)}
          <div className={styleM}></div>
          <div className={styleM}></div>
          <em className=" text-7xl mb-5 font-bold">months</em>
        </div>



        <div className="flex gap-5 pl-10 pr-10">

          {styleD === '' && (<div className=" text-purple-600 font-extrabold text-6xl">{cD}</div>)}
          <div className={styleD}></div>
          <div className={styleD}></div>
          <em className=" text-7xl mb-5 font-bold">days</em>
        </div>


      </div>
    </div>
  );
}
