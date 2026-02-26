// ハンバーガーボタンとメニューを取得
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// ボタンがクリックされた時の動き
hamburger.addEventListener('click', () => {
  // メニューに 'active' クラスを付けたり外したりする
  mobileMenu.classList.toggle('active');
});

// メニュー内のリンクをクリックしたらメニューを閉じる
const menuLinks = document.querySelectorAll('.mobile-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// ページが読み込まれたら実行
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // 「既にローディングを見た」という記録があるかチェック
  if (!sessionStorage.getItem('loadingSeen')) {
    
    // 【初めての場合】演出を実行
    setTimeout(() => {
      loader.classList.add('loaded');
      // 「見たよ！」という記録を保存
      sessionStorage.setItem('loadingSeen', 'true');
    }, 2000);

  } else {
    // 【2回目以降の場合】演出なしですぐに消す
    loader.style.display = 'none';
  }
  
  // 1.5秒間ロゴを見せてから、フェードアウトさせる
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 24400); // 2000は2秒のこと
});