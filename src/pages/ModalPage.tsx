import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(10px)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    // scale: 0.95,
    y: '-45%',
    x: '-50%',
  },
  visible: {
    opacity: 1,
    // scale: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: '-45%',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

const radioCardVariants = {
  unselected: {
    backgroundColor: 'white',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  selected: {
    backgroundColor: 'rgba(249, 250, 251, 1)',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
}

const descriptionVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.1, ease: 'easeOut' },
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    marginTop: 4,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.2, ease: 'easeIn', delay: 0.1 },
    },
  },
}

const checkIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', duration: 0.3 },
  },
}

const deployButtonVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    height: 0,
    marginTop: 0,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.1, ease: 'easeOut' },
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    height: 'auto',
    marginTop: 24,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.2, ease: 'easeIn' },
      y: { duration: 0.2, ease: 'easeOut' },
    },
  },
}

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [CreateOptionType, setDeploymentType] = useState('')

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setDeploymentType('')
    }
  }

  return (
    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center">
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild>
          <button
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-white hover:bg-primary/90 transition-colors"
            aria-label="Open dialog"
          >
            Open Modal
          </button>
        </Dialog.Trigger>

        <AnimatePresence mode="wait">
          {isOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 bg-black/20"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[550px] rounded-2xl bg-white shadow-lg focus:outline-none"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="border-b-[0.5px] border-gray-200 p-5">
                    <Dialog.Title className="text-lg font-medium">
                      Create Function
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        className="absolute right-4 top-5 inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close dialog"
                      >
                        <motion.span
                          className="shadow-sm border-[0.5px] border-gray-200 bg-white p-1 rounded-full"
                          whileTap={{ scale: 0.95 }}
                        >
                          <XIcon className="size-[14px]" />
                        </motion.span>
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-500">
                      A secure, serverless function for computing your most sensitive
                      data.
                    </p>

                    <RadioGroup.Root
                      className="mt-4 flex flex-col gap-4"
                      value={CreateOptionType}
                      onValueChange={setDeploymentType}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <RadioGroup.Item
                          value="automatic"
                          className="relative text-left rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_5px_-1px_rgba(0,0,0,0.07)] p-4 cursor-pointer data-[state=checked]:shadow-[0px_0px_0px_2px_#6632EE] outline-none overflow-hidden transition-all duration-200"
                        >
                          <motion.div
                            variants={radioCardVariants}
                            animate={
                              CreateOptionType === 'automatic' ? 'selected' : 'unselected'
                            }
                            className="absolute inset-0"
                          />
                          <div className="absolute right-3 top-4">
                            <div
                              className={`size-5 rounded-full flex items-center justify-center ${
                                CreateOptionType === 'automatic'
                                  ? 'shadow-none bg-primary text-white'
                                  : 'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                              }`}
                            >
                              <AnimatePresence mode="wait">
                                {CreateOptionType === 'automatic' && (
                                  <motion.div
                                    variants={checkIconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                  >
                                    <CheckIcon className="size-3" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <h3 className="font-medium relative text-[15px]">
                            Import Repository
                          </h3>
                          <AnimatePresence initial={false}>
                            {CreateOptionType === '' && (
                              <motion.p
                                variants={descriptionVariants}
                                initial="visible"
                                animate="visible"
                                exit="hidden"
                                className="mt-1 text-[13px] text-gray-500 relative overflow-hidden"
                              >
                                Import Function from existing repository
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </RadioGroup.Item>

                        <RadioGroup.Item
                          value="manual"
                          className="relative text-left rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_5px_-1px_rgba(0,0,0,0.07)] p-4 cursor-pointer data-[state=checked]:shadow-[0px_0px_0px_2px_#6632EE] outline-none overflow-hidden transition-all duration-200 group"
                        >
                          <motion.div
                            variants={radioCardVariants}
                            animate={
                              CreateOptionType === 'manual' ? 'selected' : 'unselected'
                            }
                            className="absolute inset-0"
                          />
                          <div className="absolute right-3 top-4">
                            <div
                              className={`size-5 rounded-full flex items-center justify-center ${
                                CreateOptionType === 'manual'
                                  ? 'shadow-none bg-primary text-white'
                                  : 'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                              }`}
                            >
                              <AnimatePresence mode="wait">
                                {CreateOptionType === 'manual' && (
                                  <motion.div
                                    variants={checkIconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                  >
                                    <CheckIcon className="size-3" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <h3 className="font-medium relative text-[15px]">
                            Choose template
                          </h3>
                          <AnimatePresence initial={false}>
                            {CreateOptionType === '' && (
                              <motion.p
                                variants={descriptionVariants}
                                initial="visible"
                                animate="visible"
                                exit="hidden"
                                className="mt-1 text-[13px] text-gray-500 relative overflow-hidden"
                              >
                                Select one of our Function templates to get started
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </RadioGroup.Item>
                      </div>
                    </RadioGroup.Root>

                    <AnimatePresence mode="wait">
                      {CreateOptionType !== '' && (
                        <motion.div
                          variants={deployButtonVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="flex flex-col gap-4 overflow-hidden"
                        >
                          <button className="px-4 py-2 h-[40px] text-[15px] rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                            Deploy Function
                          </button>
                          <p className="text-xs text-gray-500 text-center">
                            When pushed to GitHub, we will automatically deploy the
                            Function. Can't see your repo here?{' '}
                            <a href="/" className="text-primary">
                              Configure the Evervault app on Github.
                            </a>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  )
}

export { ModalPage }
