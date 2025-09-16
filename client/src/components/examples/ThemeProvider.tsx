import { ThemeProvider } from '../ThemeProvider'
import { Button } from '@/components/ui/button'
import { useTheme } from '../ThemeProvider'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  )
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Theme Toggle Example</h3>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}