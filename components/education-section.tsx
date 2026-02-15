import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "University of California Berkeley",
      institution: "Computer Science BS",
      period: "2020 - 2024",
    },
    {
      degree: "British School Manila",
      institution: "IB 42/45, SAT 1580",
      period: "2018 - 2020",
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start">
        <div className="flex items-start space-x-2 pt-1.5 ml-3 sm:ml-0">
          <GraduationCap className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Education</h2>
        </div>
        <div className="space-y-3 ml-10 sm:ml-0">
          {education.map((edu, index) => (
            <div key={index} className="-mx-4 px-4 py-2 sm:-mx-3 sm:px-3 sm:py-1.5 rounded-md">
              <div className="sm:hidden">
                <h3 className="font-medium text-foreground leading-[1.4] mb-1" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>
                  {edu.degree} <span className="text-muted-foreground font-normal">· {edu.period}</span>
                </h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{edu.institution}</p>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-foreground leading-[1.4]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{edu.degree}</h3>
                  <span className="text-muted-foreground leading-[1.4] flex-shrink-0 ml-4" style={{fontSize: '14px'}}>{edu.period}</span>
                </div>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
