/* eslint-disable @typescript-eslint/no-explicit-any */
import { toaster_failure } from "@/model/ToasterModel";

export interface Location {
  lat: number;
  lng: number;
}

export const getCurrentPosition = (): Promise<Location> => {
  return new Promise<Location>((resolve: (location: any) => void) => {
    const success = (position: any): void => {
      const location: Location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      resolve(location);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const failure = (position: any): void => {
      toaster_failure("位置情報の取得に失敗しました。");
      const location: Location = {
        lat: 0,
        lng: 0,
      };
      resolve(location);
    };

    // 現在地取得
    navigator.geolocation.getCurrentPosition(success, failure);
  });
};
