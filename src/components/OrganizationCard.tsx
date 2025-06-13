import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Organization } from "@/types/organization";
import Icon from "@/components/ui/icon";

interface OrganizationCardProps {
  organization: Organization;
  onClick?: () => void;
}

const typeIcons: Record<string, string> = {
  university: "GraduationCap",
  "research-institute": "Microscope",
  techpark: "Building",
  accelerator: "Rocket",
  incubator: "Egg",
  fund: "DollarSign",
  corporation: "Building2",
  startup: "Zap",
  government: "LandmarkIcon",
};

const typeColors: Record<string, string> = {
  university: "bg-blue-100 text-blue-800",
  "research-institute": "bg-purple-100 text-purple-800",
  techpark: "bg-green-100 text-green-800",
  accelerator: "bg-orange-100 text-orange-800",
  incubator: "bg-yellow-100 text-yellow-800",
  fund: "bg-red-100 text-red-800",
  corporation: "bg-gray-100 text-gray-800",
  startup: "bg-pink-100 text-pink-800",
  government: "bg-indigo-100 text-indigo-800",
};

const OrganizationCard = ({ organization, onClick }: OrganizationCardProps) => {
  return (
    <Card
      className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] border-l-4 border-l-primary"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Icon
              name={typeIcons[organization.type] || "Building"}
              size={20}
              className="text-primary"
            />
            <Badge
              variant="secondary"
              className={`text-xs ${typeColors[organization.type] || "bg-gray-100 text-gray-800"}`}
            >
              {organization.category}
            </Badge>
          </div>
          {organization.established && (
            <span className="text-xs text-muted-foreground">
              с {organization.established}
            </span>
          )}
        </div>

        <CardTitle className="text-lg leading-tight">
          {organization.name}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {organization.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={14} />
            <span>{organization.location}</span>
          </div>

          {/* Контактная информация */}
          <div className="space-y-2">
            {organization.website && (
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Globe" size={14} className="text-blue-600" />
                <a
                  href={organization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {organization.website.replace("https://", "")}
                </a>
              </div>
            )}
            {organization.phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={14} className="text-green-600" />
                <a
                  href={`tel:${organization.phone}`}
                  className="hover:text-foreground"
                  onClick={(e) => e.stopPropagation()}
                >
                  {organization.phone}
                </a>
              </div>
            )}
            {organization.email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={14} className="text-purple-600" />
                <a
                  href={`mailto:${organization.email}`}
                  className="hover:text-foreground"
                  onClick={(e) => e.stopPropagation()}
                >
                  {organization.email}
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {organization.focus.slice(0, 3).map((focus, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {focus}
              </Badge>
            ))}
            {organization.focus.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{organization.focus.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {organization.services.slice(0, 2).map((service, index) => (
              <Badge
                key={index}
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
              >
                {service}
              </Badge>
            ))}
            {organization.services.length > 2 && (
              <Badge className="text-xs bg-primary/10 text-primary">
                +{organization.services.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationCard;
