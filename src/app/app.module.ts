// Main Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'app/services/authentication.service';
import { RouterGuard } from './guards/router.guard';
import { httpInterceptorProvider } from './interceptors/interceptorProvider';
// Main components:
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { favReducer } from './store/fav/fav.reducer';
import { likeReducer } from './store/likes/likes.reducer';

@NgModule({
  declarations: [AppComponent, CoverComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ fav: favReducer, like: likeReducer }),
  ],
  providers: [RouterGuard, AuthenticationService, httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
