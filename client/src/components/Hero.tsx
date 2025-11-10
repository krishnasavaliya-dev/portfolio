import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_a8254ae0.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Krishna_Savaliya_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Krishna Savaliya"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary/10 shadow-lg"
              data-testid="img-profile"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Krishna Savaliya
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
              Open edX / Django Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Open edX specialist with 4 years experience — themes, custom
            reports, ecommerce & integrations
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2"
              data-testid="button-view-work"
            >
              <Briefcase className="h-5 w-5" />
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="gap-2"
              data-testid="button-download-resume"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm" data-testid="badge-experience">
              4 Years Experience
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm" data-testid="badge-projects">
              6+ Major Projects
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm" data-testid="badge-languages">
              3 Languages
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
