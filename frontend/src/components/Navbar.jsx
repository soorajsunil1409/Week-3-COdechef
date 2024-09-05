import leftArrow from "../assets/left-arrow.png"
import selectBox from "../assets/select.png"

const Navbar = () => {
    return (
        <div className="flex justify-between p-5 pl-10 pr-10 text-3xl font-semibold">
            <a href="#">
                <img src={leftArrow} alt="" className="h-[30px]" />
            </a>
            <span>Leaderboard</span>
            <a href="#">
                <img src={selectBox} alt="" className="h-[30px]" />
            </a>
        </div>
    )
}
export default Navbar