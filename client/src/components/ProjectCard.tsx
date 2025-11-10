import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";
import openEdxImage from "@assets/generated_images/Open_edX_dashboard_interface_f86f324c.png";
import paymentImage from "@assets/generated_images/Payment_integration_interface_a2a919fe.png";
import reportsImage from "@assets/generated_images/Reports_generation_dashboard_2d5c8c42.png";
import mfeImage from "@assets/generated_images/Authentication_microfrontend_interface_b0b67ba9.png";
import apiImage from "@assets/generated_images/API_integration_dashboard_9d75f041.png";
import mobileImage from "@assets/generated_images/Mobile_plugin_interface_cfb30e85.png";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const projectImages: Record<string, string> = {
  "openedx-dashboard": openEdxImage,
  "payment-integration": paymentImage,
  "reports-dashboard": reportsImage,
  "mfe-authentication": mfeImage,
  "api-integration": apiImage,
  "mobile-plugin": mobileImage,
};

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const imageUrl = projectImages[project.image] || "";

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 transition-all hover:-translate-y-1 cursor-pointer group"
      onClick={() => onViewDetails(project)}
      data-testid={`card-project-${project.id}`}
    >
      <div className="aspect-video bg-muted overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            data-testid={`img-project-${project.id}`}
          />
        )}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.category.slice(0, 3).map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="text-xs"
              data-testid={`badge-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2" data-testid={`text-title-${project.id}`}>
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${project.id}`}>
            {project.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
          <span data-testid={`text-timeframe-${project.id}`}>{project.timeframe}</span>
          <Badge variant="outline" className="text-xs" data-testid={`badge-role-${project.id}`}>
            {project.role}
          </Badge>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-between group/btn"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(project);
          }}
          data-testid={`button-view-details-${project.id}`}
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}
