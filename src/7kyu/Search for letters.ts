// * TITLE: Search for letters
// * LINK: https://www.codewars.com/kata/search-for-letters

export function change(s: string) {
  /* * Refactor * */
  return [].map
    .call("abcdefghijklmnopqrstuvwxyz", _ =>
      s.toLowerCase().indexOf(_) > -1 ? "1" : "0"
    )
    .join("");

  /* * 1st * */
  // return "abcdefghijklmnopqrstuvwxyz"
  //   .split("")
  //   .map(_ => (s.toLowerCase().includes(_) ? 1 : 0))
  //   .join("");
}
