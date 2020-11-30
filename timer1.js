const args = process.argv.slice(2);

for (let item of args) {
  if (item < 0 || isNaN(item)) {
//do nothing
  } else {
    let number = Number(item*1000);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number)
  }
; 
}