import { v4 as uuidv4 } from "uuid";
import { STUDENTS } from "../../const";
import { DELETESTUDENT, EDITSTUDENT } from "../types";
const initialState = JSON.parse(localStorage.getItem(STUDENTS)) || [];

export const studentReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "addStudent":
      newState.push({ ...action.data, id: uuidv4() });
      break;
    case EDITSTUDENT:
      newState = newState.map((t) => {
        if (t.id === action.data.id) {
          return { ...t, ...action.data };
        } else {
          return t;
        }
      });
      break;
    case DELETESTUDENT:
      newState = newState.filter((t) => t.id !== action.data);
      break;
    default:
  }
  localStorage.setItem(STUDENTS, JSON.stringify(newState));
  return newState;
};
