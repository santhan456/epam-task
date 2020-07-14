export const GET_LOCATIONS = "GET_LOCATIONS";
export const ADD_LOCATION = "ADD_LOCATION";
export const SET_VALUE = "SET_VALUE";

export function fetchLocations() {
  return {
    type: GET_LOCATIONS,
  };
}

export function setValue(location: string, add?: boolean) {
  return {
    type: SET_VALUE,
    location,
    add
  }
}

