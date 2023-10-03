const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {

  const changeText = document.getElementById('text');

  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout (()=> {
  changeText.textContent = 'ボタンをクリックしました';
  }, 2000);
})

