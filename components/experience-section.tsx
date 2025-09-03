import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Apex Trader Funding",
      company: "Proprietary Trader",
      period: "2024 - Present",
      link: "https://apextraderfunding.com",
    },
    {
      title: "Poker Protocol",
      company: "Frontend & Smart Contract Developer",
      period: "2023",
      link: "https://web.archive.org/web/20230314142908/https://www.pokerprotocol.io/",
    },
    {
      title: "BingX",
      company: "Business Development",
      period: "2023",
      link: "https://bingx.com",
    },
    {
      title: "Sigma Prime",
      company: "Smart Contract Security Intern",
      period: "2022",
      link: "https://sigmaprime.io",
    }
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start">
        <div className="flex items-start space-x-2 pt-1.5">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Experience</h2>
        </div>
        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <a 
              key={index}
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start -mx-3 px-3 py-2 sm:py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer block"
            >
              <div className="flex-1 sm:pr-8">
                <h3 className="font-medium text-foreground leading-[1.4] mb-0.5" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{experience.title}</h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{experience.company}</p>
              </div>
              <span className="text-muted-foreground leading-[1.4] mt-1 sm:mt-0 flex-shrink-0" style={{fontSize: '14px'}}>{experience.period}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
