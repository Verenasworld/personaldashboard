import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: string 
    compledet!: boolean
  

    constructor(public text:string,){
        this.id = uuidv4()
       
        
    }
}
