import Navbar from './components/Navbar/Navbar.jsx';
import Podium from './components/Podiums/Podium.jsx';
import Leaderboard from './components/MainDiv/Leaderboard.jsx';

const App = () => {
  return (
    <div className="absolute h-full w-full md:overflow-hidden">
      <div className="relative w-full h-[150px]">
        <Navbar />
      </div >

      <div className="relative flex flex-wrap h-[85%] w-full">
        <div className="w-full mt-[80px] md:w-[50%] md:h-full h-[60%] flex flex-col">
          <Podium />
        </div>
        <div className="w-full md:w-[50%] md:h-full h-[70%] flex flex-col">
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}
export default App