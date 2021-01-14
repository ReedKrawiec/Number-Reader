
interface prefabs {
  [index:string]:any
}
import {paint} from "./paint";
import {paint_border} from "./paint_border";
import {placeholder} from "./placeholder";
export let prefabs:prefabs = {
	paint:paint,
	paint_border:paint_border,
	placeholder:placeholder,
}