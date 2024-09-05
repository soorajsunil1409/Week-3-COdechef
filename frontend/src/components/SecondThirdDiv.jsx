const SecondThirdDiv = ({ name, score, second }) => {
    return (
        <div className="flex flex-col justify-end">
            <div className={`flex flex-col ${second == '1' ? 'p-11' : 'p-9'} justify-center bg-main-color ${second == '1' ? 'rounded-l-xl' : 'rounded-r-xl'} text-white text-center border-white border-[1px]`}>
                <span className="text-md">{name}</span>
                <span className="font-bold text-xl">{score}</span>
            </div>
        </div>
    )
}
export default SecondThirdDiv