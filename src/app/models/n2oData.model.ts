export interface N2oData {
    date: string;
    average: string;
    trend: string;
    averageUnc: string;
    trendUnc: string;
  }

  export interface N2oApiResponse {
    nitrous: N2oData[];
  }