/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxObject from "@/types/CheckBoxObject";
import { getCheckBoxValue } from "@/util/Utility";
import { ref } from "vue";

const DetailSearchModel = (): any => {
  // フリーワード検索用リアクティブ
  const freeWord = ref("");

  const search = () => {
    const genres = getCheckBoxValue(storeGenre);
    const budgets = getCheckBoxValue(budgetList);
    console.log(freeWord);
    console.log(genres);
    console.log(budgets);
  };

  return {
    freeWord,
    search,
    storeGenre,
    budgetList,
  };
};

export default DetailSearchModel;

// 以下定数
const storeGenre: CheckBoxObject[] = [
  {
    title: "居酒屋",
    name: "genre",
    size: "s",
    value: "G001",
  },
  {
    title: "和食",
    name: "genre",
    size: "s",
    value: "G004",
  },
  {
    title: "中華",
    name: "genre",
    size: "s",
    value: "G007",
  },
  {
    title: "洋食",
    name: "genre",
    size: "s",
    value: "G005",
  },
  {
    title: "韓国料理",
    name: "genre",
    size: "s",
    value: "G017",
  },
  {
    title: "創作料理",
    name: "genre",
    size: "s",
    value: "G003",
  },
  {
    title: "各国料理",
    name: "genre",
    size: "s",
    value: "G010",
  },
  {
    title: "ラーメン",
    name: "genre",
    size: "s",
    value: "G013",
  },
  {
    title: "イタリアン・フレンチ",
    name: "genre",
    size: "m",
    value: "G006",
  },
  {
    title: "焼肉・ホルモン",
    name: "genre",
    size: "m",
    value: "G008",
  },
  {
    title: "ダイニングバー・バル",
    name: "genre",
    size: "m",
    value: "G002",
  },
  {
    title: "バー・カクテル",
    name: "genre",
    size: "m",
    value: "G012",
  },
  {
    title: "アジア・エスニック料理",
    name: "genre",
    size: "m",
    value: "G009",
  },
  {
    title: "お好み焼き・もんじゃ",
    name: "genre",
    size: "m",
    value: "G016",
  },
  {
    title: "カフェ・スイーツ",
    name: "genre",
    size: "m",
    value: "G014",
  },
  {
    title: "カラオケ・パーティ",
    name: "genre",
    size: "m",
    value: "G011",
  },
];

const budgetList: CheckBoxObject[] = [
  {
    title: "～500円",
    name: "budget",
    size: "m",
    value: "B009",
  },
  {
    title: "501～1000円",
    name: "budget",
    size: "m",
    value: "B010",
  },
  {
    title: "1001～1500円",
    name: "budget",
    size: "m",
    value: "B011",
  },
  {
    title: "1501～2000円",
    name: "budget",
    size: "m",
    value: "B001",
  },
  {
    title: "2001～3000円",
    name: "budget",
    size: "m",
    value: "B002",
  },
  {
    title: "3001～4000円",
    name: "budget",
    size: "m",
    value: "B003",
  },
  {
    title: "4001～5000円",
    name: "budget",
    size: "m",
    value: "B008",
  },
  {
    title: "5001～7000円",
    name: "budget",
    size: "m",
    value: "B004",
  },
  {
    title: "7001～10000円",
    name: "budget",
    size: "m",
    value: "B005",
  },
  {
    title: "10001～15000円",
    name: "budget",
    size: "m",
    value: "B006",
  },
  {
    title: "15001～20000円",
    name: "budget",
    size: "m",
    value: "B012",
  },
  {
    title: "20001円～",
    name: "budget",
    size: "m",
    value: "B013,B014",
  },
];
