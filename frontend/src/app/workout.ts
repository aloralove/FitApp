import { Detail } from "./detail";

export interface Workout {
    id: number;
    wo_name: string;
    details: Detail[];
  }