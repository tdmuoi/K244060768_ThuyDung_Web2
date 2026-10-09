import { Component } from '@angular/core';
import { CourseRegistration } from '../classes/course-registration-component';

@Component({
  selector: 'app-course-registration-component',
  standalone: false,
  styleUrl: './course-registration-component.css',
  templateUrl: './course-registration-component.html',
})
export class CourseRegistrationComponent {
  courseModel = new CourseRegistration();

  onSubmit() {
    alert("Thông tin đăng ký khóa học: \n" + this.courseModel.getInfor());
  }
}