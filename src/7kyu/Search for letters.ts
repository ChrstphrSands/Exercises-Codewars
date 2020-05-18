// * TITLE: Search for letters
// * LINK: https://www.codewars.com/kata/search-for-letters

export function change(s: string) {
  /* * Reformat * */
  // return [].map.call('abcdefghijklmnopqrstuvwxyz', x => lower.indexOf(x) > -1 ? '1' : '0').join('');


  /* *  * */
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(_ => (s.toLowerCase().includes(_) ? 1 : 0))
    .join('')

  //?
}
