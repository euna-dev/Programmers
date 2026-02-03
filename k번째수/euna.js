function solution(array, commands) {
  return commands.map((command) => {
    const [startIndex, endIndex, kIndex] = command;

    const temp = array.slice(startIndex - 1, endIndex).sort((a, b) => a - b);

    return temp[kIndex - 1];
  });
}
