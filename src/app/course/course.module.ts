import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [CourseListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  exports: [CourseListComponent, CreateCourseComponent]
})
export class CourseModule { }
