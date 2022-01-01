import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCourseService } from '../list-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  constructor(private listCourse : ListCourseService,
    private router : Router) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
    f.value.keywords = f.value.keywords.split(',');
    console.log(f.value);
    this.listCourse.addCourse(f.value);
    this.router.navigateByUrl("/home");
  }

}
