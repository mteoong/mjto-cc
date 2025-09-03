import { Code } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Quickscope",
      description: "Memecoin Trading Terminal · Next.js, TypeScript, Supabase",
      date: "2025",
      link: "https://quickscope-dex.vercel.app/",
    },
    {
      name: "Typo",
      description: "Memecoin Landing Page · Webflow",
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
      name: "Poker Protocol",
      description: "DeFi website and staking app · Webflow, React",
      date: "2023",
      link: "https://web.archive.org/web/20230508105430/https://www.pokerprotocol.io/",
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
        <div className="flex items-start space-x-2 pt-1.5">
          <Code className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Projects</h2>
        </div>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start -mx-3 px-3 py-2 sm:py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer block"
            >
              <div className="flex-1 sm:pr-8">
                <h3 className="font-medium text-foreground leading-[1.4] mb-0.5" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{project.name}</h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{project.description}</p>
              </div>
              <span className="text-muted-foreground leading-[1.4] mt-1 sm:mt-0 flex-shrink-0" style={{fontSize: '14px'}}>{project.date}</span>
            </a>
          ))}
        </div>
      </div>
  )
}
