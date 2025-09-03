import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Computer Science BS",
      institution: "University of California Berkeley",
      period: "2020 - 2024",
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start">
        <div className="flex items-start space-x-2 pt-1.5">
          <GraduationCap className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-foreground leading-[1.2]" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>Education</h2>
        </div>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start -mx-3 px-3 py-2 sm:py-1.5 rounded-md">
              <div className="flex-1 sm:pr-8">
                <h3 className="font-medium text-foreground leading-[1.4] mb-0.5" style={{fontSize: '14px', fontWeight: '500', letterSpacing: '-0.01em'}}>{edu.degree}</h3>
                <p className="text-muted-foreground leading-[1.4] m-0" style={{fontSize: '14px'}}>{edu.institution}</p>
              </div>
              <span className="text-muted-foreground leading-[1.4] mt-1 sm:mt-0 flex-shrink-0" style={{fontSize: '14px'}}>{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
