//My solution

function positiveSum(arr) {
	for (var i=0, count = 0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
		}
	}
	return count;
}
