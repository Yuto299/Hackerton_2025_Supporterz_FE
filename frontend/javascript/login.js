document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    // ユーザーが入力したIDとパスワードを取得
    const userId = document.querySelector("input[name='ID']").value;
    const password = document.querySelector("input[name='password']").value;

    // 簡単なバリデーション（空欄チェック）
    if (userId.trim() === '' || password.trim() === '') {
      alert('IDとパスワードを入力してください。');
      return;
    }

    // 仮の認証処理
    if (userId === 'yyy' && password === '123') {
      // 仮のJWTを作成（本番ではサーバーから取得する）
      const fakeToken = createFakeJWT(userId);

      // トークンをローカルストレージに保存
      localStorage.setItem('jwtToken', fakeToken);

      window.location.href = 'index.html'; // ログイン成功時にindex.htmlへ
    } else {
      alert('IDまたはパスワードが間違っています。');
    }
  });

  // 仮のJWTを作成する関数
  function createFakeJWT(userId) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = { sub: userId, iat: Date.now() / 1000, exp: (Date.now() + 3600000) / 1000 }; // 1時間後に有効期限切れ

    // Base64エンコードする関数
    function base64Encode(obj) {
      return btoa(JSON.stringify(obj)).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    return `${base64Encode(header)}.${base64Encode(payload)}.signature_placeholder`;
  }
});
