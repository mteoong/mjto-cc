import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Computer Science BSc",
      institution: "National University of Singapore",
      period: "2020 - 2024",
    },
    {
      degree: "Trading Certification Program",
      institution: "Singapore Exchange, Singapore",
      period: "2023 - 2024",
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[140px_1fr] gap-20 items-start">
        <div className="flex items-start space-x-2 pt-1.5">
          <GraduationCap className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Education</h2>
        </div>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start -mx-3 px-3 py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer">
              <div className="flex-1 pr-12">
                <h3 className="font-medium text-foreground leading-[1.4] mb-0.5" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{edu.degree}</h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{edu.institution}</p>
              </div>
              <span className="text-muted-foreground leading-[1.4] flex-shrink-0" style={{fontSize: '14px'}}>{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
