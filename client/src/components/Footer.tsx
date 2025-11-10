import { Github, Linkedin, Mail } from "lucide-react";
import { SiGitlab } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/krishnasavaliya",
    },
    {
      name: "GitLab",
      icon: SiGitlab,
      url: "https://gitlab.com/krishnasavaliya",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/krishnasavaliya",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:krishna@example.com",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Krishna Savaliya</h3>
            <p className="text-sm text-muted-foreground">
              Open edX & Django Developer
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-transform hover:-translate-y-1"
                aria-label={link.name}
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} Krishna Savaliya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
