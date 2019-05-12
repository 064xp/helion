//Return date in format Apr 02 2019
export const getDate = () => {
  const date = new Date();
  const output = date.toDateString().slice(4);

  return output;
};

export const randomNumFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
