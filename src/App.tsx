import { ChartColumnIcon } from './ChartColumnIcon'
import { ReloadChartIcon } from './ReloadChartIcon'

function App() {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center relative">
      <div className="flex gap-4">
        <ChartColumnIcon />
        <ReloadChartIcon />
      </div>
      <p className="text-xs text-gray-500 absolute bottom-10">
        Click on icons to see the animation
      </p>
    </div>
  )
}

export default App
