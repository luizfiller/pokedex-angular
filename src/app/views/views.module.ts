import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { CommonModule } from "@angular/common";
import { RoutingModule } from "./routing.module";

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule
    ]
})

export class ViewsModule { }