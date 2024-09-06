import eiden from '../../assets/eiden.png'
import firstRect from '../../assets/firstRect.png'
import crown from '../../assets/crown.png'

const First = () => {
    return (
        <div className="h-[210px] w-[150px] bg-main-color items-center rounded-t-[40px] border-[1px] border-white">
            <div className="flex flex-col items-center text-center translate-y-[-60%] gap-7">
                <div className="size-[60px] translate-y-[35px]">
                    <img src={crown} alt="" />
                </div>
                <div className="size-[100px]">
                    <img src={eiden} alt="" />
                </div>
                <div className="absolute flex justify-center size-[30px] translate-y-[169px]">
                    <img src={firstRect} alt=""></img>
                    <span className="absolute translate-y-[5px] text-sm">1</span>
                </div>
                <div className="flex flex-col items-center text-white gap-3 translate-y-[20%]">
                    <span className="text-l">Eiden</span>
                    <span className="font-bold text-xl">2430</span>
                </div>
            </div >
        </div >
    )
}
export default First