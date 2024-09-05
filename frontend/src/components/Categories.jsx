const Categories = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row justify-around bg-white w-[25vw] rounded-xl">
                <div className="flex flex-col justify-end pt-4 gap-2 pb-[3px]">
                    <span>Organisation</span>
                    <span className="w-[95px] h-[4px] bg-main-color rounded-sm"></span>
                </div>
                <div className="flex flex-col justify-end p-4">
                    <span>Department</span>
                </div>
            </div>
        </div>
    )
}
export default Categories