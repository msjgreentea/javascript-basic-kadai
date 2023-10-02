// 変数  num に0から100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 99)

//変数numの値の値を出力する
console.log(num);

// 条件分岐のswitch文を用いて、 変数numの値によって、出力する文字列を切り替える
if (num % 3 === 0) {
  console.log("3の倍数です");
} 
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
else if (num % 15 === 0) {
    console.log("3と5の倍数です");
}
else {
  console.log(num)
}
  
