import { Code } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Trading Dashboard",
      description: "Real-time trading analytics · React, TypeScript",
      date: "Dec 2024",
    },
    {
      name: "Portfolio Tracker",
      description: "Investment portfolio management · Next.js, Supabase",
      date: "Nov 2024",
    },
    {
      name: "Market Analysis Tool",
      description: "Technical analysis platform · Python, FastAPI",
      date: "Oct 2024",
    },
    {
      name: "Crypto Bot",
      description: "Automated trading bot · Node.js, WebSocket",
      date: "Sep 2024",
    },
    {
      name: "Risk Calculator",
      description: "Position sizing calculator · React, Chart.js",
      date: "Aug 2024",
    },
  ]

  return (
    <div className="grid grid-cols-[140px_1fr] gap-20 items-start">
        <div className="flex items-start space-x-2 pt-1.5">
          <Code className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Projects</h2>
        </div>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-between items-start -mx-3 px-3 py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer">
              <div className="flex-1 pr-12">
                <h3 className="font-medium text-foreground leading-[1.4] mb-0.5" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{project.name}</h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{project.description}</p>
              </div>
              <span className="text-muted-foreground leading-[1.4] flex-shrink-0" style={{fontSize: '14px'}}>{project.date}</span>
            </div>
          ))}
        </div>
      </div>
  )
}
