export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  description: string;
  services: string[];
  location: string;
  website?: string;
  established?: number;
  focus: string[];
  stage: string[];
  category: string;
}

export type OrganizationType =
  | "university"
  | "research-institute"
  | "techpark"
  | "accelerator"
  | "incubator"
  | "fund"
  | "corporation"
  | "startup"
  | "government";

export interface FilterOptions {
  type: OrganizationType | "all";
  category: string;
  searchQuery: string;
}
