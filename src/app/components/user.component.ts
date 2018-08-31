import { Component } from '@angular/core';
import {PostService} from '../services/postService';
@Component({
  selector: 'user',
  templateUrl: '../views/user.component.html',
  providers: [PostService]
})

export class UserComponent {
  //title = 'app';
  name :string;
  title :string;
  email :string;
  address: address ;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

    constructor( private postService: PostService ){
        console.log("constructor ran");
        this.name = "Arjun";
        this.title = 'sharad app';
        this.email = 'sharad.vagare@gmail.com';
        this.address = {
          street : 'dp road',
          city : 'Pune',
          state : 'Maharastra'
        };
        this.hobbies = ["Music","Movies","Sports"];
        this.showHobbies = false;
        this.postService.getPosts().subscribe(posts =>{
          //console.log(posts);
          this.posts=posts;
        });
    }

    tobbleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies= false;
      }else{
          this.showHobbies= true;
      }
    }

    addHobby(hobby){
      this.hobbies.push(hobby);
    }

    deleteHobby(id){
      this.hobbies.splice(id,1);
    }
}

interface address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}

/*template: `
<h1>Hello User Component</h1>
<h1>Hello {{title}}</h1>
  <p> email {{email}} </p>
  <p>address {{address.street}} </p>
  <h1>hobbies{{hobbies.length}} </h1>
  <div *ngfor='let val of hobbies;'>
      <span>{{val}}</span>
  </div>
`*/
