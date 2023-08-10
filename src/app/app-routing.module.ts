import { ContactComponent } from './pages/contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailAndWhatsAppMarketingComponent } from './services/email-and-whats-app-marketing/email-and-whats-app-marketing.component';
import { FacebookMarketingComponent } from './services/facebook-marketing/facebook-marketing.component';
import { InstagramMarketingComponent } from './services/instagram-marketing/instagram-marketing.component';
import { ManagingSocialMediaHandlesComponent } from './services/managing-social-media-handles/managing-social-media-handles.component';
import { InstagramAndYouTubeManagementComponent } from './services/instagram-and-you-tube-management/instagram-and-you-tube-management.component';
import { PromotedOnSocialMediaComponent } from './services/promoted-on-social-media/promoted-on-social-media.component';
import { WebsiteAndAppMarketingComponent } from './services/website-and-app-marketing/website-and-app-marketing.component';
import { YouTubeMarketingComponent } from './services/you-tube-marketing/you-tube-marketing.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContentwritingComponent } from './services/contentwriting/contentwriting.component';
const routes: Routes = [
  {path:'emailAndWhatsAppMarketing', component:EmailAndWhatsAppMarketingComponent },
  {path:'FacebookMarketing',component:FacebookMarketingComponent},
  {path:'InstagramAndYouTubeManagement',component:InstagramAndYouTubeManagementComponent},
  {path:'instagramMarketing',component:InstagramMarketingComponent},
  {path:'ManagingSocialMediaHandles',component:ManagingSocialMediaHandlesComponent},
  {path:'PromotedOnSocialMedia',component:PromotedOnSocialMediaComponent},
  {path:'WebsiteAndAppMarketing',component:WebsiteAndAppMarketingComponent},
  {path:'YouTubeMarketing',component:YouTubeMarketingComponent},
  {path:'contact', component:ContactComponent },
  {path:'FAQs', component:FaqsComponent },
  {path:'home', component:HomeComponent },
  {path:'contentWriting', component:ContentwritingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
