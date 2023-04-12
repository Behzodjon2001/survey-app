import { v4 as uuidv4 } from "uuid";
import { STUDENTS } from "../../const";
const initialState = JSON.parse(localStorage.getItem(STUDENTS)) || [];

export const studentReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "addStudent":
      newState.push({ ...action.data, id: uuidv4() });
      break;
    case "editStudent":
      break;
    default:
      break;
  }
  localStorage.setItem(STUDENTS, JSON.stringify(newState));
  return newState;
};
