export const config = {
  // APIのエンドポイント/URL
  API_BASE_URL: "https://nanitabe-api.herokuapp.com/",
  ACCOUNT_REGISTER_API: "newregister",
  LOGIN_API: "login",

  // ローカルストレージのKEY
  JWT_TOKEN_KEY: "nanitabeJwtToken",
  JWT_TOKEN_EXPIRE_KEY: "nanitabeJwtTokenExpire",

  // JWTトークンの期限(日)
  JWT_TOKEN_EXPIRE_MAX_DATE: 7,

  // 予期せぬエラー時の文言
  UNEXPECTED_ERROR_MSG: "予期せぬエラーが発生しました。",
};
