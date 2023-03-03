import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontpageHeroComponent } from './components/frontpage-hero/frontpage-hero.component';
import { ServiceOfferingComponent } from './components/service-offering/service-offering.component';
import { AboutWithVideoComponent } from './components/about-with-video/about-with-video.component';
import { InsideMoniepointComponent } from './components/inside-moniepoint/inside-moniepoint.component';
import { InsideMoniepointTestimonialsComponent } from './components/inside-moniepoint-testimonials/inside-moniepoint-testimonials.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { JoinUsCtoComponent } from './components/join-us-cto/join-us-cto.component';
import { FromNewsroomComponent } from './components/from-newsroom/from-newsroom.component';
import { FromNewsroomCtoComponent } from './components/from-newsroom-cto/from-newsroom-cto.component';
import { MainpageFooterComponent } from './components/mainpage-footer/mainpage-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageHeroComponent,
    ServiceOfferingComponent,
    AboutWithVideoComponent,
    InsideMoniepointComponent,
    InsideMoniepointTestimonialsComponent,
    JoinUsComponent,
    JoinUsCtoComponent,
    FromNewsroomComponent,
    FromNewsroomCtoComponent,
    MainpageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
