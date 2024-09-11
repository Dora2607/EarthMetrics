export interface ArcticApiResponse {
    error: null;
    arcticData: ArcticDataObj;
  }

export interface ArcticDataObj {
  data: ArcticData,
}

export type ArcticData = Record<string, {
    value: number;
    anom: number;
    monthlyMean: number;
  }>;

export interface ArcticMonthlyData {
  value: number;
  anom: number;
  monthlyMean: number;
}

export interface ArcticDataArr{
  key:string,
  value: number;
  anom: number;
  monthlyMean: number;
}