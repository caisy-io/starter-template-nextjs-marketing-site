import {
  IGenFooter,
  IGenMainNavigation,
  IGenPage,
  IGenUniversalText,
} from "./types_gen";
export interface IPage {
  universalText?: IGenUniversalText;
  navigation?: IGenMainNavigation;
  footer?: IGenFooter;
  Page?: IGenPage;
}
