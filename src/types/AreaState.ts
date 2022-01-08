import { LargeArea, MiddleArea, SmallArea } from "@/model/AreaModel";

export default interface AreaState {
  selected: "" | "LS" | "LA" | "MA";
  largeArea: LargeArea[];
  middleArea: MiddleArea[];
  smallArea: SmallArea[];
  ls_code: string;
  ls_name: string;
  la_code: string;
  la_name: string;
  ma_code: string;
  ma_name: string;
  sa_code: string[];
  sa_name: string[];
}