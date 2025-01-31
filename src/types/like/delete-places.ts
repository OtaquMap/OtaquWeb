export interface DeletePlacesRequest {
  placeIds: number[];
}

export interface DeletePlacesResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}
