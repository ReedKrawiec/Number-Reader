import { room } from "../../lib/room";
import { game, viewport } from "../../van";
import { state_config } from "../../lib/room";
import { painter_state,g } from "../main";
import * as config from "./paint_room.json";
import { paint } from "../objects/paint";
import { Camera } from "../../lib/render";
import { exec_type, Poll_Mouse } from "../../lib/controls";
import { Text,HUD } from "../../lib/hud";
let cfig = config as unknown as state_config;


class paint_hud extends HUD{
  setTextElements():Text[]{
    return [
      new Text({
        position: {
          x: viewport.width * .5,
          y: viewport.height * 7/8
        },
        size: 30,
        font: "Alata",
        color: "white",
        align:"center",
        scaling:1
      },
      ()=>{
        let room = g.getRoom() as paint_room;
        return `Last Prediction: ${room.state.last_prediction}`;
      })
    ];
  }
}

interface paint_room_state {
  timer:number,
  has_sent:boolean,
  last_prediction:string
}

export class paint_room extends room<paint_room_state>{
  background_url = "./sprites/paint.png";
  game: game<painter_state>;
  render = false;
  state:paint_room_state;
  wait_time:number = 1500;
  constructor(game: game<painter_state>) {
    super(game, cfig);
    this.game.state.cameras.push(new Camera({
      x:game.state.globals.side_length/2 * 10,
      y:game.state.globals.side_length/2 * 10,
      dimensions:viewport,
      scaling:1.5,
      debug:false
    },
    {
      x:0,
      y:0,
      height:1,
      width:1
    },
    new paint_hud()
    ));
    this.state = {
      timer:0,
      has_sent:true,
      last_prediction:""
    }
  }
  async sendTensor(){
    let tensor:string[] = [];
    this.objects.filter((o)=>o.tags[0] == "paint").forEach((o)=>{
      let pos = o.state.position;
      tensor.push(`[${27 - pos.y/10},${pos.x/10}]`);
    })
    let to_send = tensor.join(",");
    let res = await fetch("/evaluate", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST", 
      body: `{"inputted":[${to_send}]}`
    })
    let content = await res.json();
    this.state.last_prediction = content;
    let objects = this.objects.filter((o)=>o.tags[0]=="paint");
    objects.forEach((o)=>o.delete());
    
  }
  registerControls() {
    this.bindControl("mouse0down", exec_type.repeat,() => {
      let mouse = Poll_Mouse(this.game.state.cameras[0]);
      if(mouse && mouse.x >= 0 && mouse.x <= 270 && mouse.y >= 0 && mouse.y <= 270){
        let grid_mouse = {
          x:Math.floor(mouse.x/10) * 10,
          y:Math.floor(mouse.y/10) * 10
        }
        let pixels = this.checkObjectsPointInclusive(grid_mouse,["paint"]) as paint[];
        if(!pixels[0]){
          this.addItem(new paint({
            position:grid_mouse,
            velocity:{
              x:0,
              y:0
            },
            rotation:0,
            scaling:{
              height:1,
              width:1
            }
          }));
          this.state.timer = 0;
          this.state.has_sent = false;
        }
      }
      
    },1)
  }
  registerParticles() {

  }
  statef(delta_time: number) {
    super.statef(delta_time);
    this.state.timer += delta_time;
    if(this.state.timer > this.wait_time && !this.state.has_sent){
      this.sendTensor();
      this.state.has_sent = true;
    }
  }

}

