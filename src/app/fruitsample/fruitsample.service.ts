import { Injectable } from "@angular/core";
import { Mykitchen1 } from "./fruitsample";



@Injectable({
    providedIn:'root'
})
  export class fruitsampleservice
  {   
private Items1:Mykitchen1[]=[
  {
    fruitid:1,
    fruitname:"Banana",
    fruitcost:50,
    fruitimg:"./assets/fruits/f1.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:2,
    fruitname:"Apples",
    fruitcost:70,
    fruitimg:"./assets/fruits/f2.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:3,
    fruitname:"Grapes",
    fruitcost:80,
    fruitimg:"./assets/fruits/f3.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:4,
    fruitname:"Kivi",
    fruitcost:150,
    fruitimg:"./assets/fruits/f4.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:5,
    fruitname:"Strawberry",
    fruitcost:400,
    fruitimg:"./assets/fruits/f5.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:6,
    fruitname:"Pine-apple",
    fruitcost:50,
    fruitimg:"./assets/fruits/f6.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:7,
    fruitname:"Mango",
    fruitcost:50,
    fruitimg:"./assets/fruits/f7.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:8,
    fruitname:"Guava",
    fruitcost:80,
    fruitimg:"./assets/fruits/f12.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:9,
    fruitname:"Water-melon",
    fruitcost:30,
    fruitimg:"./assets/fruits/f9.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:10,
    fruitname:"Pomegranate",
    fruitcost:50,
    fruitimg:"./assets/fruits/f10.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:11,
    fruitname:"Custard-apple",
    fruitcost:60,
    fruitimg:"./assets/fruits/f11.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:12,
    fruitname:"Orange",
    fruitcost:49,
    fruitimg:"./assets/fruits/f13.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:13,
    fruitname:"Papaya",
    fruitcost:39,
    fruitimg:"./assets/fruits/f14.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:14,
    fruitname:"Dates",
    fruitcost:229,
    fruitimg:"./assets/fruits/f15.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:15,
    fruitname:"Cherry",
    fruitcost:289,
    fruitimg:"./assets/fruits/f16.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:16,
    fruitname:"Karbuja",
    fruitcost:50,
    fruitimg:"./assets/fruits/f18.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:17,
    fruitname:"Sapota",
    fruitcost:30,
    fruitimg:"./assets/fruits/f19.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
  {
    fruitid:18,
    fruitname:"Blue berry",
    fruitcost:289,
    fruitimg:"./assets/fruits/f21.jpeg",
    fruitquantity:0,
    fruittotal:0
  },
    ]
      getItems1():Mykitchen1[]
      {
        return this.Items1;    
      }

      
        
  }  
    
    
   