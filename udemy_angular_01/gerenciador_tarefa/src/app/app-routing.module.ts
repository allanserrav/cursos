import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefasRotas } from "./tarefas";

export const rotas: Routes = [
    {
        path: '',
        redirectTo: 'tarefas/listar',
        pathMatch: 'full' // TODO o que é?
    },
    ...TarefasRotas
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule {}