document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.style.position = 'relative';

  /**
   * ランダムな方向のサインカーブに沿って猫の足跡を順次生成する関数
   * @param {number} catId - 猫の識別子（1: 水色、2: ブラウン）
   */
  function spawnSineCurve(catId) {
    const width = main.clientWidth;
    const height = main.clientHeight;
    const center = { x: width / 2, y: height / 2 };

    // ランダムな角度（0～2π）を生成 → これが基準線の向きになる
    const theta = Math.random() * 2 * Math.PI;
    const d = { x: Math.cos(theta), y: Math.sin(theta) }; // 基準線の単位ベクトル
    // 基準線に垂直な方向（サイン波のオフセット方向）
    const p = { x: -Math.sin(theta), y: Math.cos(theta) };

    // <main> の矩形との交点を求める
    let tValues = [];
    if (d.x !== 0) {
      tValues.push((0 - center.x) / d.x);
      tValues.push((width - center.x) / d.x);
    }
    if (d.y !== 0) {
      tValues.push((0 - center.y) / d.y);
      tValues.push((height - center.y) / d.y);
    }
    let intersections = [];
    for (let t of tValues) {
      const x = center.x + t * d.x;
      const y = center.y + t * d.y;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        intersections.push(t);
      }
    }
    if (intersections.length < 2) {
      intersections = [-width, width];
    }
    const tMin = Math.min(...intersections);
    const tMax = Math.max(...intersections);

    // サインカーブの基準線上の開始点
    const start = {
      x: center.x + tMin * d.x,
      y: center.y + tMin * d.y,
    };
    // 基準線上の全長（dは正規化済み）
    const totalLength = tMax - tMin;

    // サインカーブのパラメータ
    const amplitude = Math.random() * 10 + 20; // 振幅：10～20px
    const cycles = Math.random() * 2 + 1; // 1～3周期
    const frequency = (cycles * 2 * Math.PI) / totalLength; // 周波数
    const phase = Math.random() * 2 * Math.PI; // 位相

    // 足跡間隔（1.5倍：60px）
    const step = 60;
    let s = 0;

    // 猫ごとの足跡の色を設定（catId: 2ならブラウン、それ以外は水色）
    const footprintColor = catId === 2 ? 'rgba(139,69,19,0.8)' : 'rgba(173,216,230,0.8)';

    /**
     * サインカーブ上に順次足跡を配置する再帰関数
     */
    function placeNext() {
      if (s > totalLength) {
        // サインカーブの生成が完了したら、一定時間後に同じ猫で新たな足跡列を開始
        const totalDuration = (totalLength / step) * 100 + 1000;
        setTimeout(() => {
          spawnSineCurve(catId);
        }, totalDuration + 500);
        return;
      }

      // 基準線上の現在位置
      const baseX = start.x + s * d.x;
      const baseY = start.y + s * d.y;
      // サイン波によるオフセット
      const offset = amplitude * Math.sin(frequency * s + phase);
      const finalX = baseX + offset * p.x;
      const finalY = baseY + offset * p.y;

      // 微分値から接線の傾きを求め、回転角を算出
      const derivative = amplitude * frequency * Math.cos(frequency * s + phase);
      const tanX = d.x + derivative * p.x;
      const tanY = d.y + derivative * p.y;
      const angleRad = Math.atan2(tanY, tanX);
      const rotation = (angleRad * 180) / Math.PI + 90;

      // 猫の足跡（肉球）の要素を生成（SVG）
      const paw = document.createElement('div');
      paw.innerHTML = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="28" r="10" fill="${footprintColor}" />
            <circle cx="65" cy="28" r="10" fill="${footprintColor}" />
            <circle cx="20" cy="50" r="10" fill="${footprintColor}" />
            <circle cx="80" cy="50" r="10" fill="${footprintColor}" />
            <circle cx="50" cy="70" r="15" fill="${footprintColor}" />
        </svg>
        `;

      const size = 40;
      paw.style.width = size + 'px';
      paw.style.height = size + 'px';
      paw.style.position = 'absolute';
      // 足跡の中心が (finalX, finalY) になるように配置
      paw.style.left = finalX - size / 2 + 'px';
      paw.style.top = finalY - size / 2 + 'px';
      paw.style.transform = `rotate(${rotation}deg)`;
      paw.style.transformOrigin = 'center';
      paw.style.pointerEvents = 'none';
      paw.style.transition = 'opacity 1s ease';
      main.appendChild(paw);

      // 各足跡は表示後2秒でフェードアウト、さらに1秒後にDOMから削除
      setTimeout(() => {
        paw.style.opacity = '0';
        setTimeout(() => {
          paw.remove();
        }, 1000);
      }, 2000);

      s += step;
      setTimeout(placeNext, 100);
    }
    placeNext();
  }

  // 1匹目の猫の足跡（水色）はすぐに開始
  spawnSineCurve(1);
  // 2匹目の猫の足跡（ブラウン）は1.5秒後に開始
  setTimeout(() => {
    spawnSineCurve(2);
  }, 1500);
});
