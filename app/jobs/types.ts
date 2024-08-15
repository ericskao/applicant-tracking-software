export interface JobInterface {
  id: number;
  name: string;
  departments: {
    id: number;
    name: string;
  }[];
  offices: {
    id: number;
    name: string;
  }[];
  openings: {
    id: number;
    name: string;
    status: 'opened' | 'closed';
  }[];
  custom_fields: {
    employment_type: string;
    salary_range: {
      min_value: string;
      max_value: string;
      unit: string;
    };
  };
}
