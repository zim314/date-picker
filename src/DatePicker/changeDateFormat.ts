const changeDateFormat = (array: number[]) => {
  const dateString = array[0] * 10000 + (array[1] + 1) * 100 + array[2] + "";
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);
  return `${year}/${month}/${day}`;
};

export default changeDateFormat;
