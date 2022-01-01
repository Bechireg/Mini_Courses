import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCourseService {
 private tabCourse =[
    {
      id: 1,
      title: 'Android',
      author: 'Bechir ELGHAIEB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/479px-Android_logo_2019.png',
      keywords: ['Activity', 'Intent', 'Layout'],
    },
    {
      id: 2,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
      keywords: ['Binding', 'Component', 'Module'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Omar Salah',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['Page', 'Routing', 'Module'],
    },

  ]
  constructor() {}

  getAllCourses(){
    return this.tabCourse;
  }

  getCourseById(id){
   return this.tabCourse.find((c) => c.id == id);
  }

  deleteCourse(c){
    let i = this.tabCourse.indexOf(c);
    this.tabCourse.splice(i , 1);
  }
  addCourse(newCourse){
    newCourse.id = this.tabCourse[this.tabCourse.length -1].id + 1;
    this.tabCourse.push(newCourse);
  }
}
