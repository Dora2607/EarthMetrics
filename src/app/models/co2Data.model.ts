export interface Co2Data {
    year: string;
    month: string;
    day: string;
    cycle: string;
    trend: string;
  }
  
  export interface Co2ApiResponse {
    co2: Co2Data[];
  }
  