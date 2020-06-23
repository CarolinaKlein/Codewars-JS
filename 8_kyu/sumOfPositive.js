//My solution

function positiveSum(arr) {
	for (var i=0, count = 0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
		}
	}
	return count;
}

// Solution with Reduce method

function positiveSum(arr){
    return arr.reduce((a,b) => a + (b > 0 ? b : 0, 0))
}
  //or
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

// Solution with the Reduce and filter method

function positiveSum(arr){
    return arr.filter(x => x >= 0).reduce((a,b) => a + b, 0)
}

// Solution that I don't understant why they used the i and the a for 

function positiveSum(arr) {
    var sum = 0;
    arr.forEach(function(v,i,a) {
      if(v>0){sum+=v;}
    });
    return sum;
  }
