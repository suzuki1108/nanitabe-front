/* eslint-disable no-irregular-whitespace */
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

// 記号を含む文字列であるかを返却
export const isContainSymbols = (str: string): boolean => {
  const regexp = /[^ 　ぁ-んァ-ンーa-zA-Z0-9一-龠０-９\-\r]+/u;
  return regexp.test(str);
};

// 半角全角スペースで文字列を区切る
export const splitSpace = (str: string): string[] => {
  return str.replaceAll("　", " ").split(" ");
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
