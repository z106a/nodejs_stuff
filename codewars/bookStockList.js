const b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
const c = ["A", "B", "C", "W"]

function stockList(b, c) {
  if (!b.length || !c.length) return "";
  const result = Object.create(null);
  let res = '';
  for (let catChar of c) {
    for (let book of b) {
      if (book.charAt(0) === catChar) {
        result[catChar] = Number(result[catChar]) + Number(book.split(' ')[1]) || Number(book.split(' ')[1]);
      }
    }
    result[catChar] = result[catChar] || 0;
  }
  for (let el in result) {
    res = res + `(${el} : ${result[el]}) - `
  }
  return res.replace(/-(?=[^-]*$)/, '').replace(/\s*$/,"");
}
console.log(stockList(b,c));