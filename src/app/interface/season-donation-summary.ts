import {AthleteDonationResult} from "./athlete-donation-result";

export interface SeasonDonationSummary {

  athleteDonationResults: AthleteDonationResult[];
  totalKm: number;
  totalMoney: number;
}
