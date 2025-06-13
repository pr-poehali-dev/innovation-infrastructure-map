import { Organization } from "@/types/organization";
import OrganizationCard from "./OrganizationCard";

interface OrganizationGridProps {
  organizations: Organization[];
  onOrganizationClick?: (organization: Organization) => void;
}

const OrganizationGrid = ({
  organizations,
  onOrganizationClick,
}: OrganizationGridProps) => {
  if (organizations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg">
          Организации не найдены
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Попробуйте изменить параметры поиска или фильтры
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {organizations.map((organization) => (
        <OrganizationCard
          key={organization.id}
          organization={organization}
          onClick={() => onOrganizationClick?.(organization)}
        />
      ))}
    </div>
  );
};

export default OrganizationGrid;
