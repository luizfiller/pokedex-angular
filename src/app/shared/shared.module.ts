import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { SectionComponent } from "./section/section.component";
import { BuscaPokemonComponent } from "./busca-pokemon/busca-pokemon.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SectionComponent,
        BuscaPokemonComponent,
        PokemonComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        HeaderComponent,
        SectionComponent,
        BuscaPokemonComponent,
        PokemonComponent,
    ]
})

export class SharedModule { }