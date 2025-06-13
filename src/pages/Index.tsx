import { useState, useMemo } from "react";
import { organizations } from "@/data/organizations";
import { FilterOptions, Organization } from "@/types/organization";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import OrganizationGrid from "@/components/OrganizationGrid";
import StatsOverview from "@/components/StatsOverview";

const Index = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    type: "all",
    category: "all",
    searchQuery: "",
  });

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(organizations.map((org) => org.category)),
    ];
    return uniqueCategories.sort();
  }, []);

  const filteredOrganizations = useMemo(() => {
    return organizations.filter((org) => {
      const matchesType = filters.type === "all" || org.type === filters.type;
      const matchesCategory =
        filters.category === "all" || org.category === filters.category;
      const matchesSearch =
        filters.searchQuery === "" ||
        org.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        org.description
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        org.focus.some((focus) =>
          focus.toLowerCase().includes(filters.searchQuery.toLowerCase()),
        ) ||
        org.services.some((service) =>
          service.toLowerCase().includes(filters.searchQuery.toLowerCase()),
        );

      return matchesType && matchesCategory && matchesSearch;
    });
  }, [filters]);

  const handleOrganizationClick = (organization: Organization) => {
    // В будущем здесь можно открыть модальное окно с деталями
    console.log("Clicked organization:", organization);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Карта инновационно-технологической инфраструктуры
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Интерактивная карта более 30 ключевых организаций российской
            инновационной экосистемы: от университетов и НИИ до технопарков,
            акселераторов и венчурных фондов
          </p>
        </div>

        {/* Статистика */}
        <StatsOverview organizations={organizations} />

        {/* Поиск и фильтры */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="space-y-4">
            <SearchBar
              value={filters.searchQuery}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, searchQuery: value }))
              }
              placeholder="Поиск по названию, описанию, фокусу или услугам..."
            />

            <FilterPanel
              selectedType={filters.type}
              onTypeChange={(type) => setFilters((prev) => ({ ...prev, type }))}
              selectedCategory={filters.category}
              onCategoryChange={(category) =>
                setFilters((prev) => ({ ...prev, category }))
              }
              categories={categories}
            />

            <div className="text-sm text-muted-foreground">
              Найдено:{" "}
              <span className="font-semibold">
                {filteredOrganizations.length}
              </span>{" "}
              из <span className="font-semibold">{organizations.length}</span>{" "}
              организаций
            </div>
          </div>
        </div>

        {/* Сетка организаций */}
        <OrganizationGrid
          organizations={filteredOrganizations}
          onOrganizationClick={handleOrganizationClick}
        />

        {/* Подвал */}
        <div className="text-center py-8 mt-12 border-t">
          <p className="text-muted-foreground">
            🚀 Карта инновационной экосистемы России • Обновлено{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
