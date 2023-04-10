export type LocationIQForwardResponse = LocationIQForwardResponseCity[]

export type LocationIQForwardResponseCity = {
  place_id: string
  licence: string
  osm_type: "node" | "relation" | "way"
  osm_id: string
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  icon?: string
}

export type OsmType = "node" | "relation" | "way"

export type LocationIQReverseResponse = LocationIQReverseResponseCity[]

export interface LocationIQReverseResponseCity {
  place_id: string
  licence: string
  osm_type: string
  osm_id: string
  lat: string
  lon: string
  display_name: string
  address: Address
  boundingbox: string[]
}

export interface Address {
  house_number: string
  road: string
  town: string
  municipality: string
  county: string
  state: string
  region: string
  postcode: string
  country: string
  country_code: string
}
