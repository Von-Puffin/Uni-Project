import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRootComponent } from "./app-root/app-root.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ShopPageComponent } from "./shop-page/shop-page.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: AppRootComponent, children: [
        {path: '', component: HomepageComponent},
        {path: 'shop-page', component: ShopPageComponent}
    ]}
]





@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}