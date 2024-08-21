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

export interface ApplicationInterface {
  id: number;
  jobs: {
    id: number;
    name: string;
  }[];
  candidate_id: number;
  status: string;
  current_stage: {
    id: number;
    name: string;
  };
  updated_at: string;
}

export interface CandidateInterface {
  id: number;
  first_name: string;
  last_name: string;
  email_addresses: [
    {
      value: string;
    }
  ];
  phone_numbers: {
    value: string;
  }[];
  created_at: string;
  updated_at: string;
  attachments: { filename: string; url: string }[];
}
