import leftArrow from './assets/left-arrow.png';
import selectBox from './assets/select.png';
import upArrow from './assets/upArrow.png';
import downArrow from './assets/downArrow.png';
import First from './components/First';
import SecondThird from './components/SecondThird';

import data from "./assets/data.js"

import { useState } from 'react'

const App = () => {
  const [selectorPlacement, setSelectorPlacement] = useState(30);

  return (
    <div className="absolute h-full w-full md:overflow-hidden">
      <div className="relative w-full h-[150px]">
        <div className="flex flex-col">

          <div className="flex justify-between p-5 pl-10 pr-10 text-xl md:text-3xl items-center font-semibold">
            <a href="#">
              <img src={leftArrow} alt="" className="h-[30px]" />
            </a>
            <span>Leaderboard</span>
            <a href="#">
              <img src={selectBox} alt="" className="h-[25px]" />
            </a>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-row justify-around bg-white w-[330px] rounded-xl">
              <div className="flex flex-col w-full">
                <div className="flex justify-between pl-8 pr-8 pb-3 pt-3">
                  <span onClick={() => setSelectorPlacement(30)} className="cursor-pointer">Organisation</span>
                  <span onClick={() => setSelectorPlacement(208)} className="cursor-pointer">Department</span>
                </div>
                <span className={`relative transition-all duration-150 ease-in-out left-[${selectorPlacement}px] w-[95px] h-[4px] bg-main-color rounded-sm`}></span>
              </div>
            </div>
          </div>

        </div>
      </div >
      <div className="absolute flex flex-wrap h-[85%] w-full">
        <div className="w-full mt-[80px] md:w-[50%] md:h-full h-[60%] flex flex-col">
          <div className="flex h-full justify-center items-center w-full md:scale-110">
            {/* <div className="flex items-end justify-center sm:scale-[60%] md:scale-[80%] lg:scale-[100%]"> */}
            <div className="relative flex items-end justify-center w-[90%]">
              <SecondThird name="Jackson" score="1847" second='1' />
              <First />
              <SecondThird name="Emma Aria" score="1674" second='0' />
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-[50%] md:h-full h-[70%] flex flex-col">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-main-color w-full h-[110%] pt-10 pb-10 rounded-t-[50px] top-0 md:w-[70%] md:h-[78%] md:rounded-[50px] overflow-visible overflow-y-scroll">
              {
                data.map((d, i) =>
                  <div className="flex flex-col gap-5">
                    <div className="text-white flex justify-between">
                      <div className="flex gap-7 pl-5">
                        <span className="flex size-[60px] items-center justify-center border-[4px] rounded-full text-2xl font-bold">#{i + 3}</span>
                        <div className="flex items-center">{d.name}</div>
                      </div>
                      <div className="flex flex-col justify-center items-end gap-1 pr-5 font-semibold">
                        {d.score}
                        <img src={d.up == 1 ? upArrow : downArrow} alt="" />
                      </div>
                    </div>
                    <div className="relative left-[5%] w-[90%] h-[1px] bg-white"></div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}
export default App