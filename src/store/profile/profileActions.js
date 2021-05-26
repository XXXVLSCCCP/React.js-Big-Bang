import { CHANGE_NAME } from "./profileTypes";

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName,
});
