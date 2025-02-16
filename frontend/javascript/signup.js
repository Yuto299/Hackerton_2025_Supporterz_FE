document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    // 仮の登録処理
    alert('登録が完了しました！ログイン画面に移動します！');

    console.log('ログイン画面へ即時遷移');

    // すぐにログイン画面へ遷移
    window.location.href = '../../index.html'; // 必要に応じてパスを修正
  });
});
