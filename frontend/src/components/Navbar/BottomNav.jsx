import { useState } from 'react'

const BottomNav = () => {
    const [selection, setSelection] = useState(30);

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row justify-around bg-white w-[330px] rounded-xl">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between pl-8 pr-8 pb-3 pt-3">
                        <span className="cursor-pointer" onClick={() => setSelection(30)} > Organisation</span>
                        <span className="cursor-pointer" onClick={() => setSelection(210)} > Department</span>
                    </div>
                    <span className="relative transition-all duration-150 ease-in-out w-[95px] h-[4px] bg-main-color rounded-sm" style={{ left: `${selection}px` }}></span>
                </div>
            </div >
        </div >
    )
}

export default BottomNav