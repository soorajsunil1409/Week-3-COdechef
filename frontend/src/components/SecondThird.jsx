import jackson from '../assets/jackson.png'
import emma from '../assets/emma.png'
import secRect from '../assets/secRect.png'
import thirdRect from '../assets/thirdRect.png'

const SecondThird = ({ name, score, second }) => {
    return (
        <div className={`h-[140px] w-[150px] bg-main-color ${second == '1' ? 'rounded-l-2xl' : 'rounded-r-2xl'} border-[1px] border-white`}>
            <div className="flex flex-col items-center translate-y-[-40%] gap-7">
                <div className=" size-[100px]" >
                    <img src={second == '1' ? jackson : emma} alt="" />
                </div>
                <div className="absolute flex justify-center size-[30px] translate-y-[80px]">
                    <img src={second == '1' ? secRect : thirdRect} alt="" />
                    <span className="absolute translate-y-[5px] text-sm">{second == '1' ? 2 : 3}</span>
                </div>
                <div className="flex flex-col items-center text-white translate-y-[-20%] gap-2">
                    <span className="text-l">{name}</span>
                    <span className="font-bold text-xl">{score}</span>
                </div>
            </div>
        </div >
    )
}
export default SecondThird