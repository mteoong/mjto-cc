import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontrun Pro",
      company: "Product Engineer",
      period: "Oct 2025 - Present",
      link: "https://www.frontrun.pro/landing",
    },
    {
      title: "Encrypto",
      company: "Fullstack Developer",
      period: "Aug 2025 - Present",
      link: "https://www.encrypto.fun/",
    },
    {
      title: "Apex Trader Funding",
      company: "Proprietary Trader",
      period: "May 2025 - Present",
      link: "https://apextraderfunding.com",
    },
    {
      title: "BingX",
      company: "Business Development",
      period: "2024",
      link: "https://bingx.com",
    },
    {
      title: "Poker Protocol",
      company: "Frontend & Smart Contract Developer",
      period: "2023",
      link: "https://web.archive.org/web/20230314142908/https://www.pokerprotocol.io/",
    },
    {
      title: "Code4rena",
      company: "Independent Smart Contract Auditor",
      period: "2022",
      link: "https://code4rena.com/@0xDecorativePineapple",
    },
    {
      title: "Sigma Prime",
      company: "Blockhain Research Intern",
      period: "2022",
      link: "https://sigmaprime.io",
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start">
        <div className="flex items-start space-x-2 pt-1.5 ml-3 sm:ml-0">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Experience</h2>
        </div>
        <div className="space-y-3 ml-10 sm:ml-0">
          {experiences.map((experience, index) => (
            <a
              key={index}
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-4 px-4 py-2 sm:-mx-3 sm:px-3 sm:py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer block"
            >
              <div className="sm:hidden">
                <h3 className="font-medium text-foreground leading-[1.4] mb-1" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>
                  {experience.title} <span className="text-muted-foreground font-normal">· {experience.period}</span>
                </h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{experience.company}</p>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-foreground leading-[1.4]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{experience.title}</h3>
                  <span className="text-muted-foreground leading-[1.4] flex-shrink-0 ml-4" style={{fontSize: '14px'}}>{experience.period}</span>
                </div>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{experience.company}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
