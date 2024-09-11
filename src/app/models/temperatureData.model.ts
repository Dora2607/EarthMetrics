export interface TemperatureData {
    time: string;
    station: string;
    land: string;
  }
  
  export interface TemperatureApiResponse {
    error: null;
    result: TemperatureData[];
  }




