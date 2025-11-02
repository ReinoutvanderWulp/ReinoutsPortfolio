import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import LayoutComponent from '@/components/LayoutComponent.tsx'
import {BrowserRouter} from 'react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.PROD,
    },
  },
})

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
