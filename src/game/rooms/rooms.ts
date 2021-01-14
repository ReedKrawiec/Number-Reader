
interface room_dir {
  [index:string]:any
}
import {paint_room} from "./paint_room";
import {placeholder} from "./placeholder";
export let rooms:room_dir = {
	paint_room:paint_room,
	placeholder:placeholder,
}