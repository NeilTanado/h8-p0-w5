function changeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
    var obj = {};
    obj['firstName'] = arr[i][0];
    obj['lastName'] = arr[i][1];
    obj['gender'] = arr[i][2];
    obj['age'] = arr[i][3];
    if (obj['age'] == null) {
      obj['age'] = 'Invalid Birth Year';
    }
    console.log(obj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
