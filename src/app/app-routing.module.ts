import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "collection-summary",
    loadChildren: () =>
      import("./../pages/collection-summary/collection-summary.module").then(
        (m) => m.CollectionSummaryPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./../pages/jmshome/jmshome.module").then(
        (m) => m.JmshomePageModule
      ),
  },

  {
    path: "collection-report",
    loadChildren: () =>
      import("./../pages/collection-report/collection-report.module").then(
        (m) => m.CollectionReportPageModule
      ),
  },

  {
    path: "payment-success",
    loadChildren: () =>
      import("./../pages/payment-success/payment-success.module").then(
        (m) => m.PaymentSuccessPageModule
      ),
  },

  {
    path: "menu",
    loadChildren: () =>
      import("./../pages/menu/menu.module").then((m) => m.MenuPageModule),
  },

  {
    path: "scheme-detail",
    loadChildren: () =>
      import("./../pages/scheme-detail/scheme-detail.module").then(
        (m) => m.SchemeDetailPageModule
      ),
  },

  {
    path: "chit-list",
    loadChildren: () =>
      import("./../pages/chit-list/chit-list.module").then(
        (m) => m.ChitListPageModule
      ),
  },

  {
    path: "joint-chit",
    loadChildren: () =>
      import("./../pages/join-chit/join-chit.module").then(
        (m) => m.JoinChitPageModule
      ),
  },

  {
    path: "groupsdetails",
    loadChildren: () =>
      import("./../pages/groupsdetails/groupsdetails.module").then(
        (m) => m.GroupsdetailsPageModule
      ),
  },

  {
    path: "scheme-pay",
    loadChildren: () =>
      import("./../pages/scheme-pay/scheme-pay.module").then(
        (m) => m.SchemePayPageModule
      ),
  },

  {
    path: "howtouse",
    loadChildren: () =>
      import("./../pages/howtouse/howtouse.module").then(
        (m) => m.HowtousePageModule
      ),
  },

  {
    path: "howtouseapp",
    loadChildren: () =>
      import("./../pages/howtouseapp/howtouseapp.module").then(
        (m) => m.HowtouseappPageModule
      ),
  },

  {
    path: "member-update",
    loadChildren: () =>
      import("./../pages/member-update/member-update.module").then(
        (m) => m.memberupdatePageModule
      ),
  },

  {
    path: "search",
    loadChildren: () =>
      import("./../pages/search/search.module").then((m) => m.SearchPageModule),
  },

  {
    path: "faq",
    loadChildren: () =>
      import("./../pages/faq/faq.module").then((m) => m.FaqPageModule),
  },

  {
    path: "login",
    loadChildren: () =>
      import("./../pages/login/login.module").then((m) => m.LoginPageModule),
  },

  {
    path: "offers",
    loadChildren: () =>
      import("./../pages/offers/offers.module").then((m) => m.OffersPageModule),
  },

  {
    path: "settings",
    loadChildren: () =>
      import("./../pages/settings/settings.module").then(
        (m) => m.SettingsPageModule
      ),
  },

  {
    path: "tabs",
    loadChildren: () =>
      import("./../pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },

  {
    path: "push-note",
    loadChildren: () =>
      import("./../pages/pushnote/pushnote.module").then(
        (m) => m.PushnotePageModule
      ),
  },

  {
    path: "testeasypay",
    loadChildren: () =>
      import("./../pages/testeasypay/testeasypay.module").then(
        (m) => m.TesteasypayPageModule
      ),
  },

  {
    path: "message",
    loadChildren: () =>
      import("./../pages/messages/messages.module").then(
        (m) => m.MessagesPageModule
      ),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
