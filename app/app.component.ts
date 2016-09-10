import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { WelcomeComponent } from './home/welcome.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EmptyStateComponent } from './emptystate/emptystate.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['EmptyState']">Empty State</a></li>
                    <li><a [routerLink]="['Accordion']">Accordion</a></li>
                    <li><a [routerLink]="['Pagination']">Pagination</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    ` ,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/accordion', name: 'Accordion', component: AccordionComponent},
  { path: '/pagination', name: 'Pagination', component: PaginationComponent},
  { path: '/emptystate', name: 'EmptyState', component: EmptyStateComponent}
])
export class AppComponent {
    pageTitle: string = 'Angular2 Components';
}