import moment from "moment";

export const formatDate = (date?: string): string | null => {
  if (!date) {
    return null;
  }
  return moment(new Date(date)).format("YYYY-MM-DD");
};

export const formatTime = (time?: string): string | null => {
  if (!time) {
    return null;
  }
  return moment(new Date(time)).format("YYYY-MM-DD HH:mm:ss");
};
