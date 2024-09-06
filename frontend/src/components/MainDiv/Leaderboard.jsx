import data from "../../assets/data.js"
import Position from "./Position.jsx"

const Leaderboard = () => {
    return (
        <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-main-color w-full h-[110%] pt-10 pb-10 rounded-t-[50px] top-0 md:w-[70%] md:h-[78%] md:rounded-[50px] overflow-visible overflow-y-scroll">
                {data.map((dta, idx) =>
                    <Position d={dta} i={idx} />
                )}
            </div>
        </div>
    )
}
export default Leaderboard