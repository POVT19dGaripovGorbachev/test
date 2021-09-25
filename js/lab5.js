//1
 num=123;
alert(num);
//2
str1="java";
str2="script";
str=str1+str2;
console.log(str);
//3
 let name ='gksjfd';
console.log(`привет, ${name} `);
//4
console.log(str.length);
//5
str=`a,
b,
c`;
console.log(str);
//6
r=10;
s=Math.PI*r**2;
console.log(s);
//7


a="5px";
b="6px";
c=parseInt(a)+parseInt(b);
console.log(c);
//8
a="5.4px";
b="6.3px";
c=parseFloat(a)+parseFloat(b);
console.log(c);
//9
/**a=prompt("сторона квадрата  ");
s=a**2;
console.log(s);  **/
//10
a=4214;
b=421421;
a=String(a);
b=String(b);
console.log(a.length +b.length);

//11
str='abcde';
console.log(str[0],str[2], str[4]);

//12
str='abcde';
console.log(str[4],str[3], str[2] , str[1], str[0]);
//13
str='abcde'; num = 3;
console.log(str[num]);
//14
/** a=prompt("строка  ");
s=a.length;
console.log(a[s-1]);  **/
//15
/** num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num); **/
//16
/** 
 * a=Number(prompt("длинна  ")) ;
b=Number(prompt("длинна  ")) ;
p=a+b;
console.log(p); **/
//17  
 arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i]+3;
   
  }
  console.log(arr);
 //19
   arr = ["a", 'b', 'c'];
arr[0]=1;
arr[1]=2;
arr[2]=3;

  console.log(arr);

  //20
  arr = ["a", 'b', 'c'];
  arr2=[1, 2, 3];
  
  arr2.concat(arr2,arr);
  console.log(arr2);
  //21
  arr.push(1,2,3);
  console.log(arr);
  //22
  arr=[1,2,3];
  arr.reverse();

  console.log(arr);
  arr.reverse();
  //23

  arr.push(4,5,6);
  console.log(arr);


//24
arr=[1,2,3];
arr.unshift(4,5,6);
console.log(arr);
//25;
arr =['js', 'css', 'jq'];
console.log(arr.shift());



//26
console.log(arr.pop());
//27
arr=[1,2,3,4,5];arr2=arr.slice([0],[3] );
console.log(arr2);
//28
arr=[1,2,3,4,5];arr2=arr.slice([3],[5] );
console.log(arr2);
//29
arr=[1,2,3,4,5];arr.splice(1,[ 2 ] );
console.log(arr);
//30
arr=[1,2,3,4,5];arr2=arr.splice(1,3  );
console.log(arr2);
//31
arr=[1,2,3,4,5];arr.splice(3,0,'a', 'b', 'c'  );
console.log(arr);
//32
arr=[1,2,3,4,5];
arr.splice(1,0,'a', 'b' );
arr.splice(-1,0,'с' );
arr.splice(8,0,'е' );
console.log(arr);
//33

arr= [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);


