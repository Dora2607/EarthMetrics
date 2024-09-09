export interface ArcticMonthlyData {
  value: number;
  anom: number;
  monthlyMean: number;
}

export interface ArcticData {
    "data": ArcticMonthlyData[];
}

export interface ArcticApiResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    arcticData: ArcticData;
  }