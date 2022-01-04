// 引数の文字列がEmail形式であるかを返却
export const isEmailAddress = (email: string): boolean => {
  const regexp =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  return regexp.test(email);
};

// 引数の文字列が半角英数字両方含む8~20形式であるかを返却
export const isPassword = (password: string): boolean => {
  const regexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i;
  return regexp.test(password);
};

// 空文字判定
export const isBlank = (str: string): boolean => {
  return str ? false : true;
};

import CheckBoxObject from "@/types/CheckBoxObject";
// チェックボックスのvalue配列取得
export const getCheckBoxValue = (array: CheckBoxObject[]): string[] => {
  const checkList = array.filter((item) => {
    const checkbox = document.getElementById(item.value) as HTMLInputElement;

    if (checkbox === null) {
      return false;
    }

    if (checkbox.checked) {
      return true;
    }
    return false;
  });

  return checkList.map((item) => item.value);
};
