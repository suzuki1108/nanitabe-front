export const config = {
  // 画面名
  VIEW_NAME_HOME: "Home",
  VIEW_NAME_SIGN_UP: "SignUp",
  VIEW_NAME_SIGN_IN: "SignIn",
  VIEW_NAME_MY_PAGE: "MyPage",
  VIEW_NAME_LOCATION_SEARCH_RESULT: "LocationSearchResult",
  VIEW_NAME_DETAIL_SEARCH: "DetailSearch",
  VIEW_NAME_DETAIL_SEARCH_RESULT: "DetailSearchResult",
  // 画面のパス
  VIEW_PATH_HOME: "/",
  VIEW_PATH_SIGN_UP: "/sign_up",
  VIEW_PATH_SIGN_IN: "/sign_in",
  VIEW_PATH_MY_PAGE: "/my_page",
  VIEW_PATH_LOCATION_SEARCH_RESULT: "/location_search_result",
  VIEW_PATH_DETAIL_SEARCH: "/detail_search",
  VIEW_PATH_DETAIL_SEARCH_RESULT: "/detail_search_result",

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
