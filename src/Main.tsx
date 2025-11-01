import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import LayoutComponent from '@/components/LayoutComponent.tsx'
import {BrowserRouter} from 'react-router'

const root = createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <StrictMode>
    <BrowserRouter>
      <LayoutComponent/>
    </BrowserRouter>
  </StrictMode>
)