//import { Button } from '@renderer/components/ui/button'
import { ModeToggle } from '@renderer/components/mode-toggle'
import { DemoReportAnIssue } from '@renderer/components/report-an-issue'
import { cn } from '@renderer/lib/utils'
const App = () => {
  function DemoContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn('flex items-center justify-center [&>div]:w-full', className)}
        {...props}
      />
    )
  }
  return (
    <div id="app">
      <ModeToggle></ModeToggle>
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue></DemoReportAnIssue>
          </DemoContainer>
        </div>
      </div>
    </div>
  )
}

export default App
