import moment from "moment";

export const formatTime = (time?: string): string | null => {
  if (!time) {
    return null;
  }
  const date = new Date(time);
  return moment(date).format("YYYY-MM-DD");
};
