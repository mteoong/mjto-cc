import { Code } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Pump.fun/PumpSwap Copytrader",
      description: "Latency optimized solana trading bot · TypeScript, Solana, Laserstream",
      date: "2025",
      link: "https://github.com/mteoong/sol-copytrader",
    },
    {
      name: "Quickscope",
      description: "Memecoin Trading Terminal · Next.js, TypeScript, Supabase",
      date: "2025",
      link: "https://quickscope-dex.vercel.app/",
    },
    {
      name: "Typo",
      description: "AI Agent Protocol · Webflow, Rust, Typescript",
      date: "2024",
      link: "https://typo.bot",
    },
    {
      name: "Discord MirrorBot",
      description: "Player Prop Mirror Server · Typescript, Docker, AWS",
      date: "2023",
      link: "https://github.com/mteoong/mirrorbot",
    },
    {
      name: "MoonJaks",
      description: "NFT Mint Site · React",
      date: "2022",
      link: "https://moonjaks.vercel.app/",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start">
        <div className="flex items-start space-x-2 pt-1.5 ml-3 sm:ml-0">
          <Code className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Projects</h2>
        </div>
        <div className="space-y-3 ml-10 sm:ml-0">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-4 px-4 py-2 sm:-mx-3 sm:px-3 sm:py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer block"
            >
              <div className="sm:hidden">
                <h3 className="font-medium text-foreground leading-[1.4] mb-1" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>
                  {project.name} <span className="text-muted-foreground font-normal">· {project.date}</span>
                </h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{project.description}</p>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-foreground leading-[1.4]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{project.name}</h3>
                  <span className="text-muted-foreground leading-[1.4] flex-shrink-0 ml-4" style={{fontSize: '14px'}}>{project.date}</span>
                </div>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
  )
}
