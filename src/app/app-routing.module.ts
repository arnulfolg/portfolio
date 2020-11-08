import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { TypographyComponent } from './typography/typography.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'education', component: EducationComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:project', component: ProjectComponent},
  { path: 'typography', component: TypographyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
