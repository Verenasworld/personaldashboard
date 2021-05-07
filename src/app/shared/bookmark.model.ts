
import {v4 as uuid4} from 'uuid'

export class Bookmark{
    id: string
    name!: string
    url!: URL

    constructor( name: string, url: string){
          this.id = uuid4()  
          this.url = new URL(url)
          this.name = name
    }
}

