import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';

const Position = ({ d, i }) => {
    return (
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
export default Position