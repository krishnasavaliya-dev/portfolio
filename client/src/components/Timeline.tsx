import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import type { TimelineEvent } from "@shared/schema";
import projectsData from "../data/projects.json";

export function Timeline() {
  const timelineEvents = projectsData.timeline as TimelineEvent[];

  const getIcon = (type: string) => {
    switch (type) {
      case "internship":
        return <GraduationCap className="h-5 w-5" />;
      case "employment":
        return <Briefcase className="h-5 w-5" />;
      case "project":
        return <Code2 className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-blue-600 dark:bg-blue-400";
      case "employment":
        return "bg-green-600 dark:bg-green-400";
      case "project":
        return "bg-purple-600 dark:bg-purple-400";
      default:
        return "bg-primary";
    }
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey from internship to major project deliveries
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-event-${event.id}`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full ${getTypeColor(
                      event.type
                    )} flex items-center justify-center text-white shadow-lg`}
                    data-testid={`timeline-icon-${event.id}`}
                  >
                    {getIcon(event.type)}
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="p-6 hover-elevate transition-transform hover:-translate-y-1">
                    <div className="flex items-start gap-4 md:hidden mb-4">
                      <div
                        className={`w-10 h-10 rounded-full ${getTypeColor(
                          event.type
                        )} flex items-center justify-center text-white shrink-0`}
                      >
                        {getIcon(event.type)}
                      </div>
                      <Badge variant="outline" className="text-xs" data-testid={`badge-date-${event.id}`}>
                        {event.date}
                      </Badge>
                    </div>

                    <div className="hidden md:block mb-3">
                      <Badge variant="outline" className="text-xs" data-testid={`badge-date-desktop-${event.id}`}>
                        {event.date}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold mb-1" data-testid={`text-title-${event.id}`}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-company-${event.id}`}>
                      {event.company}
                    </p>
                    <p className="text-sm leading-relaxed" data-testid={`text-description-${event.id}`}>
                      {event.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
