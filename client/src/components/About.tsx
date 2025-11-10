import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Server,
  Layers,
  GitBranch,
  Terminal,
  Box,
} from "lucide-react";

export function About() {
  const skills = [
    { name: "Django", icon: Server, color: "text-green-600 dark:text-green-400" },
    { name: "Open edX", icon: Globe, color: "text-blue-600 dark:text-blue-400" },
    { name: "Python", icon: Code2, color: "text-yellow-600 dark:text-yellow-400" },
    { name: "JavaScript", icon: Terminal, color: "text-orange-600 dark:text-orange-400" },
    { name: "MySQL", icon: Database, color: "text-cyan-600 dark:text-cyan-400" },
    { name: "REST APIs", icon: Layers, color: "text-purple-600 dark:text-purple-400" },
    { name: "Git", icon: GitBranch, color: "text-red-600 dark:text-red-400" },
    { name: "Docker", icon: Box, color: "text-blue-500 dark:text-blue-300" },
  ];

  const openEdxVersions = [
    "Koa",
    "Lilac",
    "Palm",
    "Quince",
    "Redwood",
    "Sumac",
  ];

  const languages = ["English", "Hindi", "Gujarati"];

  const tools = [
    "VS Code",
    "Ubuntu/Linux",
    "GitLab/GitHub",
    "Postman",
    "Bootstrap",
    "jQuery",
    "Mako/Jinja",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building robust backend systems and seamless
            integrations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-4">
                Open edX/Django developer with 4 years of experience (including
                a 10-month training period). I have hands-on experience across
                Open edX releases from Koa to Sumac, theme customization,
                payment gateway integrations, custom reporting, Studio/LMS
                customization, and backend work for microfrontends.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I enjoy solving tricky integration problems and building clean,
                maintainable backend systems that scale with user needs.
              </p>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="p-4 hover-elevate active-elevate-2 transition-transform hover:-translate-y-1 cursor-default"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <skill.icon className={`h-8 w-8 ${skill.color}`} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="px-3 py-1"
                    data-testid={`tool-${tool.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Open edX Expertise
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-3">
                  Experience across multiple releases:
                </p>
                <div className="flex flex-wrap gap-2">
                  {openEdxVersions.map((version) => (
                    <Badge
                      key={version}
                      variant="outline"
                      className="text-xs"
                      data-testid={`version-${version.toLowerCase()}`}
                    >
                      {version}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center justify-between"
                    data-testid={`language-${lang.toLowerCase()}`}
                  >
                    <span className="text-sm font-medium">{lang}</span>
                    <Badge variant="secondary" className="text-xs">
                      Fluent
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground" data-testid="text-location">
                Ahmedabad, India
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
