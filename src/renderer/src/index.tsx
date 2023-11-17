import { createRoot } from 'react-dom/client'
import FileSystemRoutes from './components/FileSystemRoutes'
import { Suspense } from 'react'
import { SWRConfig, SWRConfiguration } from 'swr'

const swrConfig: SWRConfiguration = {
  errorRetryCount: 2,
  errorRetryInterval: 500,
  revalidateOnFocus: false,
  revalidateIfStale: false,
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <SWRConfig value={swrConfig}>
    <Suspense>
      <FileSystemRoutes />
    </Suspense>
  </SWRConfig>,
)
