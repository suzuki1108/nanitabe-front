import { config } from "@/constants/const";

// トークンをセットする
export const setJwtToken = (jwtToken: string): void => {
  const expire = new Date();
  // 現在日時 + サーバ仕様上最大日数をJS内部でトークンの期限とする
  expire.setDate(expire.getDate() + config.JWT_TOKEN_EXPIRE_MAX_DATE);

  localStorage.setItem(config.JWT_TOKEN_EXPIRE_KEY, expire.toString());
  localStorage.setItem(config.JWT_TOKEN_KEY, jwtToken);
};

// トークンを取得する
export const getJwtToken = (): string | null => {
  // ローカルストレージからJWTトークンの期限を取得
  const expire = localStorage.getItem(config.JWT_TOKEN_EXPIRE_KEY);

  if (expire === null) {
    return null;
  }

  const expireDateTime = new Date(expire);

  // トークン期限チェック -> 期限切れならトークン削除
  if (new Date() > expireDateTime) {
    localStorage.removeItem(config.JWT_TOKEN_KEY);
    return null;
  }

  return localStorage.getItem(config.JWT_TOKEN_KEY);
};
