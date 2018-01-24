function shoppingTime(memberId, money) {
    let tempatID=[];
    let idDLL = {};
    idDLL['memberId'] = memberId
    idDLL['money'] = money
  if (memberId === '' || memberId == null) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  let tmp = [];
  let obj = {};
  obj['Sepatu Stacattu'] = 1500000;
  obj['Baju Zoro'] = 500000;
  obj['Baju H&N'] = 250000;
  obj['Sweater Uniklooh'] = 175000;
  obj['Casing Handphone'] = 50000;
    for(var i = 0 ; i < Object.values(obj).length ; i++){
      if(money >= Object.values(obj)[i]){
        money = money - Object.values(obj)[i];
        tmp.push(Object.keys(obj)[i]);
      }
    }
    idDLL['listPurchased'] = tmp
    idDLL['changeMoney'] = money
    tempatID.push(idDLL)
    return tempatID
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//   //{ memberId: '1820RzKrnWn08',
//   // money: 2475000,
//   // listPurchased:
//   //  [ 'Sepatu Stacattu',
//   //    'Baju Zoro',
//   //    'Baju H&N',
//   //    'Sweater Uniklooh',
//   //    'Casing Handphone' ],
//   // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja