import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IconsPage } from './pages/IconsPage'
import { ModalPage } from './pages/ModalPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IconsPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
