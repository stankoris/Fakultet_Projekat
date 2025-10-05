import { ReviewsModel } from "./reviews.model"

export interface AllToysModel {
      id: number
      slika_url: string
      naziv: string
      opis: string
      tip: string
      uzrast: string
      ciljna_grupa: string
      datum_proizvodnje: string
      cena: number
      recenzije: ReviewsModel
    }