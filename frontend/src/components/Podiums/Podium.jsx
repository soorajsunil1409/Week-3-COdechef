import First from './First';
import SecondThird from './SecondThird';

const Podium = () => {
    return (
        <div className="flex h-full justify-center items-center w-full md:scale-110">
            <div className="relative flex items-end justify-center w-[90%]">
                <SecondThird name="Jackson" score="1847" second='1' />
                <First />
                <SecondThird name="Emma Aria" score="1674" second='0' />
            </div>
        </div>
    )
}
export default Podium