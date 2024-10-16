const dateComparison = (array1: number[], array2: number[] | null) => {
  if (array2 !== null) {
    for (let i = 0; i < 3; i++) {
      if (array1[i] > array2[i]) return 1;
      if (array1[i] < array2[i]) return -1;
    }
    return 0;
  }
  return -1;
};

export default dateComparison;
