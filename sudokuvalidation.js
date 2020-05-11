var a = [
      [6, 3, 0, 2, 0, 8, 0, 1, 0],
      [2, 0, 0, 0, 5, 0, 0, 8, 9],
      [1, 0, 9, 0, 6, 0, 0, 3, 0],
      [0, 0, 8, 0, 0, 6, 0, 5, 0],
      [0, 0, 0, 1, 8, 7, 0, 0, 0],
      [0, 6, 0, 5, 0, 0, 9, 0, 0],
      [0, 9, 0, 0, 7, 0, 1, 0, 6],
      [8, 1, 0, 0, 2, 0, 0, 0, 5],
      [0, 2, 0, 4, 0, 3, 0, 9, 7]
];

for (var i = 0; i < a.length; i++) {
for (var j = 0; j < a.length; j++) {
     var sudoku = a[i][j];
      if (a[i][j] != 0) {
for (var row = 0; row < a.length; row++)
 {
      if (a[i][j] == a[i][row] && j != row)
             {
             console.log('invalid num row');
             }
      if (a[i][j] == a[row][j] && i != row)
       {
            console.log('invalid num col');
       }
 }
       var x = Math.floor(i / 3) * 3;
       var y = Math.floor(j / 3) * 3;
        for (var p=x; p < x + 3; p++) {
        for (var q=y; q < y + 3; q++) 
        {
            
      if (a[i][j] == a[p][q] && i!= p && j!= q) 
      {
            console.log("invalid sub grid");
      }
         }
          }
      }
            
      }
}

/* for (var i = 1; i < a.length; i++) {
      //for (j=0; j< a.length; j++)
      //console.log(a[0][0]);
      if (a[2][2] == a[2][i]) {
            console.log('invalid num row');
      }
       if ( a[2][2] == a[i][2])
      {
          console.log('invalid num col');
      }
} */
