function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    const sortedNewArray = array.slice(i - 1, j).sort((a, b) => a - b);
    return sortedNewArray[k - 1];
  });
}
