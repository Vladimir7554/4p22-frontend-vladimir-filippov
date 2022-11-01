const getFibonacci = ((a = 0, b = 1) => () => {

  const c = (a + b);
  a = b;
  b = c;
  document.getElementById('input').value = a;
  console.log(a);
  return (a);

})()

