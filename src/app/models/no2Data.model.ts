export interface No2Data {
    date: string;
    average: string;
    trend: string;
    averageUnc: string;
    trendUnc: string;
  }

  export interface No2ApiResponse {
    nitrous: No2Data[];
  }