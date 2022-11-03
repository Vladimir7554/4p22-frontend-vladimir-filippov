const getFibonacci = ((a = 0, b = 1) => () => {

  const c = a + b;
  const inputNode = document.getElementById('input');
  a = b;
  b = c;
  inputNode.value = a;
  console.log(a);
  return a;

})()

