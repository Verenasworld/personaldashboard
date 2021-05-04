import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: string
  

    constructor(public text:string, public compledet: boolean){
        this.id = uuidv4()
        
    }
}
