import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrganizationType } from "@/types/organization";

interface FilterPanelProps {
  selectedType: OrganizationType | "all";
  onTypeChange: (type: OrganizationType | "all") => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

const typeLabels: Record<OrganizationType | "all", string> = {
  all: "Все типы",
  university: "Университеты",
  "research-institute": "НИИ",
  techpark: "Технопарки",
  accelerator: "Акселераторы",
  incubator: "Инкубаторы",
  fund: "Фонды",
  corporation: "Корпорации",
  startup: "Стартапы",
  government: "Государственные",
};

const FilterPanel = ({
  selectedType,
  onTypeChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: FilterPanelProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="min-w-[200px]">
        <Select
          value={selectedType}
          onValueChange={(value) =>
            onTypeChange(value as OrganizationType | "all")
          }
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Тип организации" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(typeLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="min-w-[200px]">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterPanel;
