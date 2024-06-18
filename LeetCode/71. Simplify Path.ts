function simplifyPath(path: string): string {
  return (
    "/" +
    path
      .split("/")
      .reduce((acc, curr) => {
        if (curr === "..") {
          acc.pop();
        } else if (curr && curr !== ".") {
          acc.push(curr);
        }
        return acc;
      }, [] as string[])
      .join("/")
  );
}
console.log(simplifyPath("/home/")); // "/home"
