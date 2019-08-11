function limit(elem) {
  let max_chars = 2;
  if(elem.value.length > max_chars) {
    elem.value = elem.value.substr(0, max_chars);
  }
}
