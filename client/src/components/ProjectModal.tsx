import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2 } from "lucide-react";
import type { Project } from "@shared/schema";
import openEdxImage from "@assets/generated_images/Open_edX_dashboard_interface_f86f324c.png";
import paymentImage from "@assets/generated_images/Payment_integration_interface_a2a919fe.png";
import reportsImage from "@assets/generated_images/Reports_generation_dashboard_2d5c8c42.png";
import mfeImage from "@assets/generated_images/Authentication_microfrontend_interface_b0b67ba9.png";
import apiImage from "@assets/generated_images/API_integration_dashboard_9d75f041.png";
import mobileImage from "@assets/generated_images/Mobile_plugin_interface_cfb30e85.png";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const projectImages: Record<string, string> = {
  "openedx-dashboard": openEdxImage,
  "payment-integration": paymentImage,
  "reports-dashboard": reportsImage,
  "mfe-authentication": mfeImage,
  "api-integration": apiImage,
  "mobile-plugin": mobileImage,
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (!isOpen || !modalRef.current || e.key !== "Tab") return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleTabKey);
      document.body.style.overflow = "hidden";
      
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTabKey);
      document.body.style.overflow = "unset";
      
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const imageUrl = projectImages[project.image] || "";
  const modalId = `modal-${project.id}`;
  const titleId = `${modalId}-title`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-testid="modal-project-details"
    >
      <Card
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card z-10 p-6 border-b flex items-center justify-between">
          <h2 
            id={titleId}
            className="text-2xl md:text-3xl font-bold pr-8" 
            data-testid="text-modal-title"
          >
            {project.title}
          </h2>
          <Button
            ref={closeButtonRef}
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="shrink-0"
            data-testid="button-close-modal"
            aria-label="Close project details dialog"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {imageUrl && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                data-testid="img-modal-screenshot"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-3 py-1">
              {project.timeframe}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {project.role}
            </Badge>
            {project.category.map((cat) => (
              <Badge key={cat} className="px-3 py-1">
                {cat}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-problem">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">My Contributions</h3>
            <ul className="space-y-3" data-testid="list-modal-contributions">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2" data-testid="list-modal-tech">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Key Outcomes</h3>
            <ul className="space-y-3" data-testid="list-modal-outcomes">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
