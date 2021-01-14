
import {obj} from "../../lib/object";
import { obj_state, Vector } from "../../lib/state";

interface paint_border_state extends obj_state{
    
}
    
interface paint_border_parameters{
    
}
    
export class paint_border extends obj{
  sprite_url = "./sprites/paint.png";
  height = 10;
  width = 10;
  collision = false;
  render = true;
  params:paint_border_parameters;
  static default_params:paint_border_parameters = {}
  constructor(state:obj_state,params:paint_border_parameters = paint_border.default_params){
    super(state,params);
  }
  statef(time_delta:number){
    
  }
  renderf(time_delta:number){
    return super.renderf(time_delta); 
  }
  register_animations(){
    
  }
  register_audio(){
    
  }
  register_controls(){
        
  }
}
    