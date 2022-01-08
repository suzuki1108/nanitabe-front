/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxObject from "@/types/CheckBoxObject";
import { getCheckBoxValue, isContainSymbols, splitSpace } from "@/util/Utility";
import { ref, watch } from "vue";
import AreaState from "@/types/AreaState";
import { Location, getCurrentPosition } from "@/model/LocationModel";
import { toaster_failure } from "./ToasterModel";
import { largeArea, middleArea } from "./AreaModel";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { AxiosError } from "axios";

interface DetailSearchForm {
  keyWord: string;
  areaCode: string;
  lat: string;
  lng: string;
  genre: string;
  budget: string;
}

let areaState: AreaState = {
  selected: "",
  largeArea: largeArea,
  middleArea: middleArea,
  smallArea: [],
  ls_code: "",
  ls_name: "",
  la_code: "",
  la_name: "",
  ma_code: "",
  ma_name: "",
  sa_code: [],
  sa_name: [],
};

const DetailSearchModel = (): any => {
  // プログレス表示用
  const loading = ref(false);
  // フリーワードバリデーションエラー用
  const outLine = ref("");
  // フリーワード検索用リアクティブ
  const freeWord = ref("");
  watch(
    () => freeWord,
    () => {
      if (isContainSymbols(freeWord.value)) {
        outLine.value = "outline-red";
        return;
      } else {
        outLine.value = "";
      }
    },
    { deep: true }
  );

  const areaChange = (area: any) => {
    areaState = area;
  };

  const search = async () => {
    loading.value = true;

    if (outLine.value !== "") {
      toaster_failure("フリーワードは記号以外で入力してください。");
      loading.value = false;
      return;
    }

    let location: Location = {
      lat: 0,
      lng: 0,
    };

    if (getArea(areaState) === "") {
      location = await getCurrentPosition();

      if (location.lat === 0 && location.lng === 0) {
        toaster_failure("位置情報をONにするか、エリア情報を入力してください。");
        loading.value = false;
        return;
      }
    }

    const detailSearchForm: DetailSearchForm = {
      keyWord: splitSpace(freeWord.value).toString(),
      areaCode: getArea(areaState),
      lat: location.lat === 0 ? "" : location.lat.toString(),
      lng: location.lng === 0 ? "" : location.lng.toString(),
      genre: getCheckBoxValue(storeGenre).toString(),
      budget: getCheckBoxValue(budgetList).toString(),
    };

    const detailSearchRepository = RepositoryFactory.get(
      config.DETAIL_SEARCH_API
    );
    const res = await detailSearchRepository
      .indexWithQuery(detailSearchForm)
      .catch(() => {
        toaster_failure(config.UNEXPECTED_ERROR_MSG);
      });

    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      loading.value = false;
      return;
    }

    if (res.status !== 200) {
      toaster_failure(res.data.message);
      loading.value = false;
      return;
    }

    // 成功時の処理記載
    loading.value = false;
  };

  return {
    outLine,
    loading,
    freeWord,
    areaChange,
    search,
    storeGenre,
    budgetList,
  };
};

const getArea = (area: AreaState): string => {
  if (area.ls_code === "") {
    return "";
  }

  if (area.la_code === "") {
    return area.ls_code;
  }

  if (area.ma_code === "") {
    return area.la_code;
  }

  if (area.sa_code.length === 0) {
    return area.ma_code;
  }

  return area.sa_code.toString();
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
