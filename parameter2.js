function adj() {
  var a = 'In 2025, Yến Chi will become '
  for(var param of arguments) {
    a += `${param}, `
  }
  console.log(a);
}
adj('beautiful', 'got hired', 'productive', 'intelligent', 'and successful');
