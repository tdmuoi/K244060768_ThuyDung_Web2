import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../classes/UserLogin';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private router = inject(Router);

  // Khởi tạo model để binding
  user = new UserLogin();

  onLogin() {
    console.log('Thông tin đăng nhập:', this.user);
    // 1. Lưu trạng thái đăng nhập để authGuard kiểm tra
    localStorage.setItem('isLoggedIn', 'true');
    alert('Đăng nhập thành công! Đang chuyển hướng sang trang Lazy Information...');
    
    // 2. Chuyển hướng tới trang lazyinfor
    this.router.navigate(['/lazyinfor']);
  }

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    alert('Đã đăng xuất! Trạng thái đăng nhập đã được xóa.');
  }
}


