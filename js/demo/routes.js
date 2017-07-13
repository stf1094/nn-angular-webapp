angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
  $stateProvider
  .state('app.icons', {
    url: "/icons",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: '{{ "ICONS" | translate }}'
    }
  })
  .state('app.icons.fontawesome', {
    url: '/font-awesome',
    templateUrl: 'views/icons/font-awesome.html',
    ncyBreadcrumb: {
      label: 'Font Awesome'
    }
  })
  .state('app.icons.simplelineicons', {
    url: '/simple-line-icons',
    templateUrl: 'views/icons/simple-line-icons.html',
    ncyBreadcrumb: {
      label: 'Simple Line Icons'
    }
  })
  .state('app.icons.glyphicons', {
    url: '/glyphicons',
    templateUrl: 'views/icons/glyphicons.html',
    ncyBreadcrumb: {
      label: 'Glyphicons'
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Glyphicons',
          files: ['css/glyphicons.css']
        }]);
      }]
    }
  })
  .state('app.icons.glyphicons-filetypes', {
    url: '/glyphicons',
    templateUrl: 'views/icons/glyphicons-filetypes.html',
    ncyBreadcrumb: {
      label: 'Glyphicons Filetypes'
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Glyphicons Filetypes',
          files: ['css/glyphicons-filetypes.css']
        }]);
      }]
    }
  })
  .state('app.icons.glyphicons-social', {
    url: '/glyphicons',
    templateUrl: 'views/icons/glyphicons-social.html',
    ncyBreadcrumb: {
      label: 'Glyphicons Social'
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Glyphicons Social',
          files: ['css/glyphicons-social.css']
        }]);
      }]
    }
  })
 .state('app.hotlist', {
    url: '/hotlist',
    templateUrl: 'views/hotlist.html',
    ncyBreadcrumb: {
      label: '{{ "Hotlist" | translate }}'
    }
  })
 .state('app.contacts', {
    url: '/contacts',
    templateUrl: 'views/contacts.html',
    ncyBreadcrumb: {
      label: '{{ "Contacts" | translate }}'
    }
  })
 .state('app.projects', {
    url: '/projects',
    templateUrl: 'views/projects.html',
    ncyBreadcrumb: {
      label: '{{ "Projects" | translate }}'
    }
  })
 .state('app.reporting', {
    url: '/reporting',
    templateUrl: 'views/reporting.html',
    ncyBreadcrumb: {
      label: '{{ "Reporting" | translate }}'
    }
  })
 .state('app.downline', {
    url: '/downline',
    templateUrl: 'views/downline.html',
    ncyBreadcrumb: {
      label: '{{ "Downline" | translate }}'
    }
  })
 .state('app.calendar', {
    url: '/calendar',
    templateUrl: 'views/calendar.html',
    ncyBreadcrumb: {
      label: '{{ "Calendar" | translate }}'
    }
  })
 .state('app.recent-messages', {
    url: '/recent-messages',
    templateUrl: 'views/recent-messages.html',
    ncyBreadcrumb: {
      label: '{{ "Recent Messages" | translate }}'
    }
  })
 .state('app.profile', {
    url: '/profile',
    templateUrl: 'views/profile.html',
    ncyBreadcrumb: {
      label: '{{ "Profile" | translate }}'
    }
  })
 .state('app.new-message', {
    url: '/new-message',
    templateUrl: 'views/new-message.html',
    ncyBreadcrumb: {
      label: '{{ "New Message" | translate }}'
    }
  })
 .state('app.create-project', {
    url: '/create-project',
    templateUrl: 'views/create-project.html',
    ncyBreadcrumb: {
      label: '{{ "Create Project" | translate }}'
    }
  })
 .state('app.new-tag', {
    url: '/new-tag',
    templateUrl: 'views/new-tag.html',
    ncyBreadcrumb: {
      label: '{{ "New Tag" | translate }}'
    }
  })
 .state('app.account-profile', {
    url: '/account-profile',
    templateUrl: 'views/account-profile.html',
    ncyBreadcrumb: {
      label: '{{ "Account Profile" | translate }}'
    }
  })
 .state('app.create-template', {
    url: '/create-template',
    templateUrl: 'views/create-template.html',
    ncyBreadcrumb: {
      label: '{{ "Create Template" | translate }}'
    }
  })
 .state('app.settings', {
    url: '/settings',
    templateUrl: 'views/settings.html',
    ncyBreadcrumb: {
      label: '{{ "Settings" | translate }}'
    }
  })
 .state('app.payments', {
    url: '/payments',
    templateUrl: 'views/payments.html',
    ncyBreadcrumb: {
      label: '{{ "Payments" | translate }}'
    }
  })
  .state('app.components', {
    url: "/components",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  })
  .state('app.components.buttons', {
    url: '/buttons',
    templateUrl: 'views/components/buttons.html',
    ncyBreadcrumb: {
      label: '{{ "BUTTONS" | translate }}'
    }
  })
  .state('app.components.social-buttons', {
    url: '/social-buttons',
    templateUrl: 'views/components/social-buttons.html',
    ncyBreadcrumb: {
      label: 'Social Buttons'
    }
  })
  .state('app.components.cards', {
    url: '/cards',
    templateUrl: 'views/components/cards.html',
    ncyBreadcrumb: {
      label: 'Cards'
    }
  })
  .state('app.components.forms', {
    url: '/forms',
    templateUrl: 'views/components/forms.html',
    ncyBreadcrumb: {
      label: 'Forms'
    }
  })
  .state('app.components.switches', {
    url: '/switches',
    templateUrl: 'views/components/switches.html',
    ncyBreadcrumb: {
      label: 'Switches'
    }
  })
  .state('app.components.tables', {
    url: '/tables',
    templateUrl: 'views/components/tables.html',
    ncyBreadcrumb: {
      label: '{{ "TABLES" | translate }}'
    }
  })
  .state('app.plugins', {
    url: "/plugins",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Plugins'
    }
  })
  .state('app.plugins.calendar', {
    url: '/calendar',
    templateUrl: 'views/plugins/calendar.html',
    ncyBreadcrumb: {
      label: '{{ "CALENDAR" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            serial: true,
            files: [
              'js/libs/moment.min.js',
              'js/libs/fullcalendar.min.js',
              'js/libs/gcal.js',
              'js/libs/calendar.js'
            ]
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/calendar.js']
        });
      }]
    }
  })
  .state('app.plugins.notifications', {
    url: '/notifications',
    templateUrl: 'views/plugins/notifications.html',
    ncyBreadcrumb: {
      label: '{{ "NOTIFICATIONS" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            files: ['js/libs/angular-toastr.tpls.min.js']
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/notifications.js']
        });
      }]
    }
  })
  .state('app.plugins.sliders', {
    url: '/sliders',
    templateUrl: 'views/plugins/sliders.html',
    ncyBreadcrumb: {
      label: '{{ "SLIDERS" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            files: [
              'js/libs/ion.rangeSlider.min.js',
              'js/libs/slider.js'
            ]
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/sliders.js']
        });
      }]
    }
  })
  .state('app.plugins.tables', {
    url: '/tables',
    templateUrl: 'views/plugins/tables.html',
    ncyBreadcrumb: {
      label: '{{ "TABLES" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            files: [
              'js/libs/jquery.dataTables.min.js',
              'js/libs/angular-datatables.min.js',
              'js/libs/angular-datatables.bootstrap.min.js'
            ]
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/tables.js']
        });
      }]
    }
  })
  .state('app.forms', {
    url: '/forms',
    templateUrl: 'views/forms.html',
    ncyBreadcrumb: {
      label: '{{ "FORMS" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            serie: true,
            files: ['js/libs/moment.min.js']
          },
          {
            serie: true,
            files: [
              'js/libs/daterangepicker.js',
              'js/libs/angular-daterangepicker.min.js'
            ]
          },
          {
            files: ['js/libs/mask.min.js']
          },
          {
            files: ['js/libs/select.min.js']
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/forms.js']
        });
      }]
    }
  })
  .state('app.widgets', {
    url: '/widgets',
    templateUrl: 'views/widgets.html',
    ncyBreadcrumb: {
      label: '{{ "WIDGETS" | translate }}'
    },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([
          {
            serie: true,
            files: ['js/libs/gauge.min.js']
          },
          {
            serie: true,
            files: ['js/libs/angular-gauge.js']
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/widgets.js']
        });
      }]
    }
  })
  .state('app.charts', {
    url: '/charts',
    templateUrl: 'views/charts.html',
    ncyBreadcrumb: {
      label: '{{ "CHARTS" | translate }}'
    },
    resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/charts.js']
        });
      }]
    }
  })
}]);
