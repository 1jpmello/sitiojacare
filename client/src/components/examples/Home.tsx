import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/ThemeProvider'
import Home from '@/pages/Home'

export default function HomeExample() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}