/**

Arijit is a brilliant boy. He likes memory games. He likes to participate alone but this time he has to have a partner. So he chooses you.

In this Game , your team will be shown N numbers for few minutes . You will have to memorize these numbers.

Now, the questioner will ask you Q queries, in each query He will give you a number , and you have to tell him the total number of occurrences of that number in the array of numbers shown to your team . If the number is not present , then you will have to say “NOT PRESENT” (without quotes).

INPUT And OUTPUT

The first line of input will contain N, an integer, which is the total number of numbers shown to your team.

The second line of input contains N space separated integers .

The third line of input contains an integer Q , denoting the total number of integers.

The Next Q lines will contain an integer denoting an integer, BiBi , for which you have to print the number of occurrences of that number (BiBi) in those N numbers on a new line.

If the number BiBi isn’t present then Print “NOT PRESENT” (without quotes) on a new line.

CONSTRAINTS

1≤N≤1051≤N≤105

0≤Bi≤10000≤Bi≤1000

1≤Q≤1051≤Q≤105

SAMPLE INPUT
6
1 1 1 2 2 0
6
1
2
1
0
3
4
SAMPLE OUTPUT
3
2
3
1
NOT PRESENT
NOT PRESENT
Explanation

The given array is (1,1,1,2,2,0) of size 6.

Total number of queries is 6 also.

For the first query i.e for 1 , the total of number of occurrences of 1 in the given array is 3 . Hence the corresponding output is 3.

For the second query i.e. for 2, the total of number of occurrences of 2 in the given array is 2 . Hence the corresponding output is 2.

For the fifth query i.e. for 3. 3 is not present in the array . So the corresponding output is "NOT PRESENT" (without quotes).

*/

var code = (function(){
	function counter(arr){
		var  count = {};
		arr.forEach(function(i) {
				count[i] = (count[i]||0) + 1;
			}
		);
		return count;
	}
	return{
		/**
		 * getRepeatCountOfNumber: return count of repeated number
		 * @params: arr(dafault YES) and num(default YES)
		 * @return: (integer) count
		 	1. counter : The counter() method will count the number of occurrences of arr index.
		*/
		getRepeatCountOfNumber: function(arr = [], num = 0){
			if(arr.length == 0){
				return 0;
			}
			if(arr.indexOf(num) == -1){
				return "NOT PRESENT";
			}
		    var count = counter(arr);
		    return count[num];
		},
		/**
		 * getRepeatCountofCharacter: return count of repeated character
		 * @params: string(default YES) and char(default YES)
		 * @return: (integer) count
		*/
		getRepeatCountofCharacter: function(string = '', char = 'a'){
			if(string.length == 0){
				return 0;
			}
			if(string.indexOf(char) == -1){
				return "NOT PRESENT";
			}
			if(char.length == 0){
				char = 'a';
			}
		    var count = counter(string.split(''));
		    return count[char];
		}
	}
})();