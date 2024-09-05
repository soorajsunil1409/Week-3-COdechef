const FirstPlaceDiv = ({ name, score }) => {
    return (
        <div className="flex flex-col p-14 pb-20 pt-20 bg-main-color rounded-t-3xl border-white border-[1px] text-white text-center">
            <span className="text-md">{name}</span>
            <span className="font-bold text-xl">{score}</span>
        </div>
    )
}
export default FirstPlaceDiv