/* eslint-disable @typescript-eslint/no-explicit-any */
import { onBeforeMount } from "vue";
import { Location, getCurrentPosition } from "./LocationModel";

const LocationSearchModel = (): any => {
  let location: Location;

  const getData = async () => {
    try {
      location = await getCurrentPosition();
    } catch (error) {
      console.log(error);
    }
  };

  onBeforeMount(() => {
    getData();
  });

  return {

  };
};

export default LocationSearchModel;
