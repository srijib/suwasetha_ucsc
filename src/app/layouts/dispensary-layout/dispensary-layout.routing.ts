// import { Routes } from '@angular/router';

// import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
// import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';

// import { HospitalsComponent } from '../adminComponents/hospitals/hospitals.component';
// import { BlogPostsComponent } from '../adminComponents/blog-posts/blog-posts.component';
// import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
/*import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
*/

import { DispensaryComponentComponent } from "../dispensary-component/dispensary-component.component";
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

export const DispensaryLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'dashboard',      component: DashboardComponent },
    // {path: 'system-users-list', component:SystemUsersListComponent},
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'hospitals',   component: HospitalsComponent },
    // { path: 'blog-posts',   component: BlogPostsComponent },
   { path: 'dispensary-component', component: DispensaryComponentComponent },
   
   
    /*{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
];
