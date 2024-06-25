import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormPlatosComponent } from './components/form-platos/form-platos.component';
import { PedidoDetalleComponent } from './components/pedido-detalle/pedido-detalle.component';

const rutas: Routes = [
  { path: 'VerMenu', component: FormPlatosComponent },
  { path: 'Pedidos', component: PedidosComponent },
  { path: 'Pedir', component: PedidoDetalleComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    MenuComponent,
    FormPlatosComponent,
    PedidoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
