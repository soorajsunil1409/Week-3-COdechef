import leftArrow from '../../assets/left-arrow.png';
import selectBox from '../../assets/select.png';

const TopNav = () => {
    return (
        <div className="flex justify-between p-5 pl-10 pr-10 text-xl md:text-3xl items-center font-semibold">
            <a href="#">
                <img src={leftArrow} alt="" className="h-[30px]" />
            </a>
            <span>Leaderboard</span>
            <a href="#">
                <img src={selectBox} alt="" className="h-[25px]" />
            </a>
        </div>
    )
}
export default TopNav