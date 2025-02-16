/**
 * backendSimulator.js
 *
 * このファイルは、講義情報送信時のバックエンドの応答をシミュレーションするためのものです。
 * 関数 simulateLectureResponse は、渡された lectureData を受け取り、50% の確率で 1 (講義あり)
 * または 0 (講義なし) を返します。
 *
 * @param {Object} lectureData - 講義情報（講義名、曜日、時限、講師名）
 * @returns {number} 1 または 0
 */
function simulateLectureResponse(lectureData) {
  // 50% の確率で 1、50% で 0 を返す
  return Math.random() < 0.5 ? 1 : 0;
}

