import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EditorPage from './pages/EditorPage'
import TopBar from './components/layout/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>

    <div className="bg-[#F5F8FB] min-h-screen">
      <TopBar />
      
      <EditorPage />

    </div>
    
  
    </>
  )
}

export default App
