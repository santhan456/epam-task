import { State } from "./reducer";

export function getLocations(state: State): string[] {
  const {locations} = state;
  return locations;
}

export function getSelectedValue(state: State): string | undefined{
  const {value} = state;
  return value;
}