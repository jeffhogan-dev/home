import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { TestPage2Component } from './test-page2/test-page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'test1', component: TestPage1Component},
    {path: 'test2', component: TestPage2Component},
    {path: '**', component: PageNotFoundComponent},
];
