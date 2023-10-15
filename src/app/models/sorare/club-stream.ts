import { Club } from "./club"

export interface ClubStream {
  data: {
    football: {
      club: Club
    }
  }
}
