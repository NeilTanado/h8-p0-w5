function totalDigitRekursif(angka) {
  var penjumlahan = angka.toString()
  if(angka.length ===0){
    return 0
  }
  else {
    var totalNambah;
    var angkaDepan =penjumlahan.slice(0,1)
    var angkaBelakang = penjumlahan.slice(1,angka.length)
    return Number(angkaDepan) + totalDigitRekursif(angkaBelakang)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5