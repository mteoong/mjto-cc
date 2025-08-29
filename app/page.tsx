import { ProfileHeader } from "@/components/profile-header"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SocialLinks } from "@/components/social-links"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-8">
        <ProfileHeader />
        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
          <div className="border-t border-border pt-6 sm:pt-8">
            <ProjectsSection />
          </div>
          <div className="border-t border-border pt-6 sm:pt-8">
            <ExperienceSection />
          </div>
          <div className="border-t border-border pt-6 sm:pt-8">
            <EducationSection />
          </div>
        </div>
        <SocialLinks />
      </div>
      <ThemeToggle />
    </main>
  )
}
