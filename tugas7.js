function tinggi(){

var tinggibadan=[170, 165, 172, 182, 180, 175, 166, 177, 183, 185]
console.log("ini adalah Hasil perulangan array for biasa:")
for(var i=0; i<tinggibadan.length; i++){
  console.log(tinggibadan[i])
}
console.log("ini adalah Hasil perulangan array for of:")
for(let x of tinggibadan){
  console.log(x);
}
}
tinggi()
