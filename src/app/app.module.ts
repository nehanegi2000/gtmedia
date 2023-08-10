import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { InstagramAndYouTubeManagementComponent } from './services/instagram-and-you-tube-management/instagram-and-you-tube-management.component';
import { InstagramMarketingComponent } from './services/instagram-marketing/instagram-marketing.component';
import { EmailAndWhatsAppMarketingComponent } from './services/email-and-whats-app-marketing/email-and-whats-app-marketing.component';
import { FacebookMarketingComponent } from './services/facebook-marketing/facebook-marketing.component';
import { WebsiteAndAppMarketingComponent } from './services/website-and-app-marketing/website-and-app-marketing.component';
import { YouTubeMarketingComponent } from './services/you-tube-marketing/you-tube-marketing.component';
import { PromotedOnSocialMediaComponent } from './services/promoted-on-social-media/promoted-on-social-media.component';
import { ManagingSocialMediaHandlesComponent } from './services/managing-social-media-handles/managing-social-media-handles.component';
import { ServicesModule } from './services/services.module';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentwritingComponent } from './services/contentwriting/contentwriting.component';


@NgModule({
  declarations: [
AppComponent,
    InstagramAndYouTubeManagementComponent,
    InstagramMarketingComponent,
    EmailAndWhatsAppMarketingComponent,
    FacebookMarketingComponent,
    WebsiteAndAppMarketingComponent,
    YouTubeMarketingComponent,
    PromotedOnSocialMediaComponent,
    ManagingSocialMediaHandlesComponent,
    InstagramAndYouTubeManagementComponent,
    FooterComponent,
    ContactComponent,
    FaqsComponent,
    HomeComponent,
    ContentwritingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule
  ],
  exports: [    InstagramMarketingComponent,
    EmailAndWhatsAppMarketingComponent,
    FacebookMarketingComponent,
    WebsiteAndAppMarketingComponent,
    YouTubeMarketingComponent,
    PromotedOnSocialMediaComponent,
    ManagingSocialMediaHandlesComponent,
    InstagramAndYouTubeManagementComponent,
    FooterComponent,
    ContactComponent,
    FaqsComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
