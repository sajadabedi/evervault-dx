import { motion, useAnimation } from 'motion/react'
import { useState } from 'react'

const frameVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
}

const lineVariants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
}

const ChartColumnIcon = () => {
  const controls = useAnimation()
  const [isEnabled, setIsEnabled] = useState(true)

  const handleClick = async () => {
    setIsEnabled(!isEnabled)
    await controls.start((i) => ({
      pathLength: isEnabled ? 0 : 1,
      opacity: isEnabled ? 0 : 1,
      transition: { delay: i * 0.1, duration: 0.2 },
    }))
  }

  return (
    <button
      className={`h-10 w-10 transition-all duration-200 rounded-lg relative  bg-white shadow-[0_0px_0px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0px_0px_1px_rgba(0,0,0,0.1),0_0px_0px_3px_rgba(0,0,0,0.03)] flex justify-center items-center ${
        isEnabled ? 'text-primary' : 'text-gray-400'
      }`}
      onClick={handleClick}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M18 17V5" className={`${isEnabled ? 'opacity-20' : 'opacity-40'}`} />
        <path d="M13 17V5" className={`${isEnabled ? 'opacity-20' : 'opacity-40'}`} />
        <path d="M8 17V5" className={`${isEnabled ? 'opacity-20' : 'opacity-40'}`} />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M13 17V9"
        />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M18 17V5"
        />
        <motion.path variants={frameVariants} d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M8 17v-3"
        />
      </svg>
    </button>
  )
}

export { ChartColumnIcon }
