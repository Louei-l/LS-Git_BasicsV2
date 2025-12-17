function cleanUp(str) {
  const regex = /[^a-z]+/gi
  return str.replaceAll(regex, ' ')
  /**
   * explanation of regex:
   * ^ negation
   * [] group
   * a-z all alphabetic characters
   * [^a-z] not all alphabetic characters, in other words, match any character that is not an alphabetic leter
   * + looks for consequtive repeating pattern
   * /g global search, looks for all matches
   * /i case insensitive, does not care withere upper or lower
   * /[^a-z]+/gi look for any character that is not an alphabetic (case insesitive) that can potentially occur consequtively.
   */
}

console.log(cleanUp("---what's my +*& line?"));