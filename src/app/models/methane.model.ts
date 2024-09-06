export interface MethaneData {
    date: string;
    average: string;
    trend: string;
    averageUnc: string;
    trendUnc: string;
  }

  export interface MethaneApiResponse {
    methane: MethaneData[];
  }

  