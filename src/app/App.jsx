import { Routes, Route } from 'react-router-dom'
import MainLayout from '../widgets/main-layout'
import HomePage from '../pages/home'
import RulesPage from '../pages/rules'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="rules" element={<RulesPage />} />
      </Route>
    </Routes>
  )
}

export default App



