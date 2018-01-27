function kaliTerusRekursif(angka) {
  perkalian = angka.toString();
  if (perkalian.length === 1) {
    return perkalian;
  }
  var kali = 1;
  for (var i = 0; i < perkalian.length; i++) {
    kali *= perkalian[i];
  }
  return kaliTerusRekursif(kali);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
