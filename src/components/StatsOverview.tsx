import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Organization } from "@/types/organization";
import Icon from "@/components/ui/icon";

interface StatsOverviewProps {
  organizations: Organization[];
}

const StatsOverview = ({ organizations }: StatsOverviewProps) => {
  const stats = {
    total: organizations.length,
    universities: organizations.filter((org) => org.type === "university")
      .length,
    techparks: organizations.filter((org) => org.type === "techpark").length,
    funds: organizations.filter((org) => org.type === "fund").length,
    accelerators: organizations.filter((org) => org.type === "accelerator")
      .length,
  };

  const statItems = [
    {
      label: "Всего организаций",
      value: stats.total,
      icon: "Building",
      color: "text-primary",
    },
    {
      label: "Университеты",
      value: stats.universities,
      icon: "GraduationCap",
      color: "text-blue-600",
    },
    {
      label: "Технопарки",
      value: stats.techparks,
      icon: "Building",
      color: "text-green-600",
    },
    {
      label: "Фонды",
      value: stats.funds,
      icon: "DollarSign",
      color: "text-red-600",
    },
    {
      label: "Акселераторы",
      value: stats.accelerators,
      icon: "Rocket",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {statItems.map((item, index) => (
        <Card key={index} className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <Icon name={item.icon} size={24} className={item.color} />
              {item.value}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
