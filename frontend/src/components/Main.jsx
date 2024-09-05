import FirstPlaceDiv from "./FirstPlaceDiv"
import SecondThirdDiv from "./SecondThirdDiv"

const Main = () => {


    return (
        <div className="flex flex-row h-[100%] bg-red-100">
            <div className="flex flex-row justify-center">
                {/* <SecondThirdDiv name="Jackson" score="1847" second='1' />
                <FirstPlaceDiv name="Eiden" score="2430" />
                <SecondThirdDiv name="Emma Aria" score="1674" second='0' /> */}
            </div>
            {/* <div className="flex flex-row justify-center bg-red-100">
                    <SecondThirdDiv name="Jackson" score="1847" second='1' />
                    <FirstPlaceDiv name="Eiden" score="2430" />
                    <SecondThirdDiv name="Emma Aria" score="1674" second='0' />
                </div> */}
        </div>
    )
}
export default Main