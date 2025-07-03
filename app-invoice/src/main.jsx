import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Invoice } from './Invoice'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invoice />
  </StrictMode>,
)
