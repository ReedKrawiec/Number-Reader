
import {obj} from "../../lib/object";
import { sprite_gen } from "../../lib/sprite";
import { obj_state, Vector } from "../../lib/state";

interface paint_state extends obj_state{
  colored:boolean
}
    
interface paint_parameters{
    
}
    
export class paint extends obj{
  sprite_url = "./sprites/paint.png";
  height = 10;
  width = 10;
  collision = false;
  state:paint_state;
  render = true;
  tick_state:false;
  params:paint_parameters;
  static default_params:paint_parameters = {}
  constructor(state:obj_state,params:paint_parameters = paint.default_params){
    super(state,params);
    this.state.colored = false;
    this.tags.push("paint");
  }
  statef(time_delta:number){
    
  }
  renderf(time_delta:number){
    let sprites = sprite_gen(this.sprite_sheet,this.width,this.height);
    let selected;
    if(this.state.colored){
      selected = sprites[0][1];
    }
    else{
      selected = sprites[0][0];
    }
    return {
      x:this.state.position.x,
      y:this.state.position.y,
      sprite:selected
    }
  }
  register_animations(){
    
  }
  register_audio(){
    
  }
  register_controls(){
        
  }
}
    