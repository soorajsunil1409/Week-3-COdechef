import Categories from "./components/Categories"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="absolute min-h-screen w-[100%] h-[100%]">
      <div className="w-[100%]">
        <Navbar />
      </div>
      <div className="">
        <Categories />
      </div>
      <div className="">
        <Main />
      </div>
    </div>
  )
}
export default App