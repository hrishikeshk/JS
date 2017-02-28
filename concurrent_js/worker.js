
var gen2D = function(rows, cols){
  var res = new Array(rows);
  for(var x = 0; x < rows; ++x){
    res[x] = new Array(cols);
    for(var v = 0; v < cols; ++v){
      res[x][v] = Math.floor(Math.random() * 10);
    }
  }
  return res;
};

var multiplier = function(sc, arr1, arr2){
  var res = new Array(sc.rows1);
  res.map(function(oneRow){
    oneRow = new Array(sc.cols2);
  });

  var taskSize = sc.toRow - sc.fromRow + 1;
  var tx = 0;
  var res = gen2D(sc.toRow - sc.fromRow + 1, sc.cols2);
  for(var x = sc.fromRow; x <= sc.toRow; ++x){
    for(var y = 0; y < sc.cols2; ++y){
      res[tx][y] = 0;
      for(var z = 0; z < sc.cols1; ++z){
        res[tx][y] += arr1[x][z] * arr2[z][y];
      }
    }
    ++tx;
  }
  return res;
};

onmessage = function(args){
  console.log(args.data.id + ': Received command to run');
  var partResult = {
    val: multiplier(args.data.sc, args.data.arr1, args.data.arr2),
    id: args.data.id
  };
  console.log(args.data.id + ': Exiting now, Done');
  postMessage(partResult);
}

