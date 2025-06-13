import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Поиск организаций...",
}: SearchBarProps) => {
  return (
    <div className="relative">
      <Icon
        name="Search"
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12 text-base"
      />
    </div>
  );
};

export default SearchBar;
