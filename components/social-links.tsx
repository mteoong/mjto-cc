import { Mail, Github, Twitter, Send } from "lucide-react"

export function SocialLinks() {
  const links = [
    {
      name: "Email",
      href: "mailto:mrc.teoong@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/mteoong",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://x.com/kokoprop",
      icon: Twitter,
    },
    {
      name: "Telegram",
      href: "https://t.me/mjtotrading",
      icon: Send,
    },
  ]

  return (
    <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
      <div className="flex justify-center space-x-4 sm:space-x-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="w-6 h-6" strokeWidth={1.25} />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
