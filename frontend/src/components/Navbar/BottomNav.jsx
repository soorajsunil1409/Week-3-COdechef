const BottomNav = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row justify-around bg-white w-[330px] rounded-xl">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between pl-8 pr-8 pb-3 pt-3">
                        <span className="cursor-pointer">Organisation</span>
                        <span className="cursor-pointer">Department</span>
                    </div>
                    <span className="relative transition-all duration-150 ease-in-out left-[30px] w-[95px] h-[4px] bg-main-color rounded-sm"></span>
                </div>
            </div>
        </div >
    )
}

export default BottomNav