import { motion } from 'motion/react'
import { useState } from 'react'
const ReloadChartIcon = () => {
  const [rotate, setRotate] = useState(0)
  return (
    <button
      onClick={() => setRotate(rotate + 360)}
      className="h-10 w-10 transition-all duration-200 rounded-lg relative text-primary bg-white shadow-[0_0px_0px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0px_0px_1px_rgba(0,0,0,0.1),0_0px_0px_3px_rgba(0,0,0,0.03)] flex justify-center items-center"
    >
      <motion.svg
        initial={false}
        animate={{ rotate }}
        transition={{ duration: 0.5 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
        <path d="M21 3v5h-5"></path>
      </motion.svg>
    </button>
  )
}

export { ReloadChartIcon }
