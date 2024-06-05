import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './shared/interceptors/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-http-interceptor-demo';
  productData: any;
  isLoading: boolean = false;

  constructor(
    private httpService: HttpClient,
    private loaderService: LoaderService,
  ) {
    this.loaderService.httpProgress().subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  ngOnInit(): void {
    this.httpService.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.productData = res;
  });
  }
}
