import {Vector,obj_state,room_state} from "../lib/state";
import {game,GetViewportDimensions,viewport} from "../van";

let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

declare global {
  interface Window { functions: any; }
}

export interface painter_state{
  side_length:number
}

export let g = new game<painter_state>(canvas_element.getContext("2d"),{
  side_length:28
});

window.functions = {};

window.functions.reset = () => {
  let objects = g.getRoom().objects.filter((o)=>o.tags[0]=="paint");
  objects.forEach((o)=>o.delete());
}

g.loadRoomString("paint_room");

