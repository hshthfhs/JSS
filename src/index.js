import "./styles.css";

//変数について

/**
 * const変数宣言
 * 再宣言上書き不可能
  const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2);
/**
 * 数値判定
 */
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲";
};
console.log(checkSum(50, 100));

/**
 * 論理演算しの本当の意味　&& ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log(true);
}

if (flag1 && flag2) {
  console.log(false);
}

/**
 * 変数が設定されていなければ、
 * 左側（numNull）がfalseであれば、右側("金額未設定です")を返す
 */
const numNull = null;
const fee = numNull || "金額未設定です";
console.log(fee);

/**
 * null判定
 */
const numNull2 = 100;
const fee2 = numNull2 && "何か設定されました";
console.log(fee2);
