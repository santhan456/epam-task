import {
  SET_VALUE
} from "./actions";

export interface State {
  locations: string[];
  value: string | undefined;
}

const defaultState: State = {
  locations: [
    "Argentina",
    "Bangladesh",
    "China",
    "Denmark",
    "Egypt",
    "Finland",
    "Greenland",
    "Hungary",
    "India",
    "Italy",
    "Japan",
    "Kazakhstan",
    "Libya",
    "Mexico",
    "Netherlands",
    "Oman",
    "Pakistan",
    "Qatar",
    "Russia",
    "Serbia",
    "Turkey",
    "United Kingdom",
    "Vatican City",
    "Yemen",
    "Zimbabwe"
  ],
  value: undefined
};

const reducer = function (state: State = defaultState, action: any) {
  switch (action.type) {
    case SET_VALUE: {
      let locations = [...state.locations];
      if(action.add && locations.indexOf(action.location) === -1){
        locations = [action.location, ...locations];
      }
      return {
        locations: locations,
        value: action.location
      };
    }
    default:
      return state;
  }
};

export default reducer;
