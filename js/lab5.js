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
//34

arr = {
	"ru":['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
console.log(arr.ru[0]);
//35

user = {
	name: "name",
  surname:"surname",
  patronymic:"patronymic"
};
console.log(user.name+" "+user.surname+" "+user.patronymic);
//37
arr=[ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0]);
//38
obj={js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]);
//39

obj={ru:['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'], 
eng: ['Monday', 'Tuesday ', 'Wednesday ', 'Thursday', 'Friday ', 'Saturday', 'Sunday'],

};


console.log(obj.ru[0]+'  '+obj.eng[2]);
//40
lang=`eng`;
day=5;
console.log(obj[lang][day]);
//41
obj={js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));
//42
test1=20;
test2=31;
if (test1>test2){
console.log(test1)

}
else{
console.log(test2)

}
//43

num=3;
if ((num>0)&&(num<5)){
console.log("verno")

}
else{
console.log("neverno")

}
//44

num1=3;
num2=4;
if ((num1>=1)&&(num2<=3)){
console.log("verno")

}
else{
console.log("neverno")

}
//45
num=83;
if ((num>=1)&&(num<=3)) 
console.log("ne popadaet")


else
if (num/10+num%10<=9)

console.log("summa cifr odnoznachna")
else
  console.log("summa cifr dvuznachna")


//46
let age = 137; let adult;
if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}
console.log(adult);
//47
num=2390;
if (num%10==0)
console.log("true")
else console.log("false");
//48
 month = 4;

if (month == 12 || month >= 1 && month <= 2){
console.log('зима');
}
if (month >2 && month <= 5){
console.log ('весна');
}
if (month > 5 && month <= 8){
console.log ('лето');
}
if (month > 8 && month <= 11){
console.log ('осень');
}

//49
num=1;
switch(num) {
  case 1:console.log("zima") ; // if (x === 'value1')
  break;
   

  case 2:console.log("vesna");  // if (x === 'value1')
  break;
  case 3:console.log("leto") ; // if (x === 'value1')
  break;
  case 4:console.log("osen") ; // if (x === 'value1')
  break;
default:console.log("oshibka");
  
} 
//50
for (i=1;i<=100;i++) if (i%2==0)console.log(i);
//51
for (i=30;i>=0;i--) console.log(i);
//52
num=1;
for (i=1;i<=20;i++) num*=i;console.log(num);
//53
num=1;
for (i=2;i<=100;i++) if (i%2==0) num+=i; console.log(num);
//54
arr=[1,2,3,4,5];
for (i=0;i<arr.length;i++) if (arr[i]%2==1) console.log(arr[i]);
//55
num=0;
arr=[1,2,3,4,5];
for (i=0;i<arr.length;i++) num+=arr[i]*arr[i]; console.log(num);
//56
let date = new Date(); date= date.getDay();
arr=['воскресенье','понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', ]
for (i=0;i<arr.length;i++) if (arr[i]==arr[date]) console.log(arr[date].toUpperCase())
 else console.log(arr[i]);

 
 