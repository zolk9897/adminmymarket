import about_company from './about_company'
import analytics from './analytics'
import banner_groups from './banner_groups'
import base_settings from './base_settings'
import blog_page from './blog_page'
import blog_page_edit from './blog_page_edit'
import catalog from './catalog'
import catalog_edit from './catalog_edit'
import complaints from './complaints'
import complaint_form_edit from './complaint_form_edit'
import delivery_and_payment from './delivery_and_payment'
import edit_bannerMany from './edit_bannerMany.js'
import edit_bannerOne from './edit_bannerOne.js'
import global_settings from './global_settings'
import legal_entity_edit from './legal_entity_edit'
import mailing from './mailing'
import mail_templates from './mail_templates'
import offer from './offer'
import pages from './pages'
import page_edit from './page_edit.js'
import price_list from './price_list'
import price_list_new from './price_list_new'
import price_edit from './price_edit'
import profile from './profile'
import rates from './rates'
import representatives from './representatives'
import requisites from './requisites'
import settings_logs from './settings_logs'
import shops from './shops.js'
import shop_template from './shop_template.js'
import tabs_test from './testPages/tab_test.js'
import test_table from './testPages/test_table.js'
import users_edit from './users_edit'
import users_list_table from './users_list_table'
import user_roles from './user_roles'
import ui_kit from './ui_kit'
import banner_list from './banner_list'
import banner_types from './banner_types'
import selections_groups from './selections_groups'
import edit_selection from './edit_selection'
import test_tree from './testPages/test_tree.js'
import test_select from './testPages/test_select.js'
import test_cascader from './testPages/test_cascader.js'
import test_dropdownMenu from './testPages/test_dropdownMenu.js'
export default {
  data: [
    {
      name: 'test_select',
      title: 'test_select',
      data: test_select,
    },
    {
      name: 'test_dropdownMenu',
      title: 'test_dropdownMenu',
      data: test_dropdownMenu,
    },
    {
      name: 'about_company',
      title: '?? ????????????????',
      data: about_company,
    },
    {
      name: 'ui_kit',
      title: 'Ui-Kit',
      data: ui_kit,
    },
    {
      name: 'catalog',
      title: '??????????????',
      data: catalog,
    },
    {
      name: 'catalog_edit',
      title: '??????????????',
      data: catalog_edit,
    },
    {
      name: 'offer',
      title: '????????????',
      data: offer,
    },
    {
      name: 'pages',
      title: '????????????',
      data: pages,
    },
    {
      name: 'analytics',
      title: '??????????????????',
      data: analytics,
    },
    {
      name: 'price_list',
      title: '??????????-??????????',
      data: price_list,
    },
    {
      name: 'price_list_new',
      title: '??????????-????????',
      data: price_list_new,
    },
    {
      name: 'price_edit',
      title: '??????????-????????',
      data: price_edit,
    },
    {
      name: 'global_settings',
      title: '?????????? ??????????????????',
      data: global_settings,
    },
    {
      name: 'test_table',
      title: '???????????????? ??????????????',
      data: test_table,
    },
    {
      name: 'rates',
      title: '????????????',
      data: rates,
    },
    {
      name: 'profile',
      title: '??????????????',
      data: profile,
    },
    {
      name: 'complaint_form_edit',
      title: '???????????????????????????? ???????????????????? ???????????????????? ??????-??????????',
      data: complaint_form_edit,
    },
    {
      name: 'delivery_and_payment',
      title: '???????????????? ?? ????????????',
      data: delivery_and_payment,
    },
    {
      name: 'representatives',
      title: '??????????????????????????',
      data: representatives,
    },
    {
      name: 'requisites',
      title: '??????????????????',
      data: requisites,
    },
    {
      name: 'users_edit',
      title: '???????????? ?????????????????????????? ????????????????????????????',
      data: users_edit,
    },
    {
      name: 'users_list_table',
      title: '???????????? ??????????????????????????',
      data: users_list_table,
    },
    {
      name: 'complaints',
      title: '???????????? ???? ??????????',
      data: complaints,
    },
    {
      name: 'mailing',
      title: '????????????????',
      data: mailing,
    },
    {
      name: 'mail_templates',
      title: '???????????????? ??????????????',
      data: mail_templates,
    },
    {
      name: 'tabs_test',
      title: '???????? ????????????????????????',
      data: tabs_test,
    },
    {
      name: 'settings_logs',
      title: '??????????????????????',
      data: settings_logs,
    },
    {
      name: 'shops',
      title: '????????????????',
      data: shops,
    },
    {
      name: 'shop_template',
      title: '#',
      data: shop_template,
    },
    {
      name: 'base_settings',
      title: '?????????????? ??????????????????',
      data: base_settings,
    },
    {
      name: 'legal_entity_edit',
      title: '???????????????????????????? ????. ????????',
      data: legal_entity_edit,
    },
    {
      name: 'edit_banner',
      title: '???????????????????????????? ????????????',
      data: edit_bannerMany,
    },
    {
      name: 'edit_banner_many',
      title: '???????????????????????????? ????????????',
      data: edit_bannerMany,
    },
    {
      name: 'edit_banner_one',
      title: '???????????????????????????? ????????????',
      data: edit_bannerOne,
    },
    {
      name: 'edit_selection',
      title: '???????????????????????????? ????????????????',
      data: edit_selection,
    },
    {
      name: 'banner_groups',
      title: '???????????? ????????????????',
      data: banner_groups,
    },
    {
      name: 'user_roles',
      title: '?????????????????? ??????????',
      data: user_roles,
    },
    {
      name: 'banner_list',
      title: '???????????? ????????????????',
      data: banner_list,
    },
    {
      name: 'banner_types',
      title: '???????? ????????????????',
      data: banner_types,
    },
    {
      name: 'selections_groups',
      title: '????????????  ????????????????',
      data: selections_groups,
    },
    {
      name: 'blog_page',
      title: '????????',
      data: blog_page,
    },
    {
      name: 'blog_page_edit',
      title: '???????? ????????????????????????????',
      data: blog_page_edit,
    },
    {
      name: 'page_edit',
      title: '???????????????????????????? ????????????????',
      data: page_edit,
    },
    {
      name: 'test_tree',
      title: 'test_tree',
      data: test_tree,
    },
    {
      name: 'test_cascader',
      title: 'test_cascader',
      data: test_cascader,
    },
  ],
  menu: [
    {
      name: 'rates',
      title: '????????????',
      icon: 'fa-solid fa-arrow-pointer',
      main: true,
    },
    {
      name: 'catalog',
      title: '??????????????',
      icon: 'fa-solid fa-file-lines',
      subMenu: [
        {
          name: 'catalog',
          title: '????????????????',
          main: true,
          subMenuParents: ['catalog'],
        },
        {
          name: 'offer',
          title: '????????????',
          subMenuParents: ['catalog'],
          main: true,
        },
      ],
    },
    {
      name: 'blog_page',
      title: '????????',
      icon: 'fa-solid fa-pen-to-square',
      main: true,
    },
    {
      name: 'content',
      title: '??????????????',
      icon: 'fa-folder fa-regular',
      subMenu: [
        {
          name: 'pages',
          title: '????????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'analytics',
          title: '??????????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'about_company',
          title: '?? ????????????????',
          subMenuParents: ['content'],
          main: true,
        },
        {
          name: 'price_list',
          title: '??????????-??????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'test_table',
          title: '???????????????? ??????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_groups',
          title: '???????????? ????????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_list',
          title: '???????????? ????????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_types',
          title: '???????? ????????????????',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'selections_groups',
          title: '???????????? ????????????????',
          main: true,
          subMenuParents: ['content'],
        },
      ],
    },
    {
      name: 'settings',
      title: '??????????????????',
      icon: 'fa-sliders',
      subMenu: [
        {
          name: 'users',
          title: '????????????????????????',
          main: true,
          subMenuParents: ['settings'],
          subMenu: [
            {
              name: 'users_list_table',
              title: '???????????? ??????????????????????????',
              main: true,
              subMenuParents: ['users'],
            },
            {
              name: 'user_roles',
              title: '????????',
              main: true,
              subMenuParents: ['users'],
            },
          ],
        },
        {
          name: 'base_settings',
          title: '?????????????? ??????????????????',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'settings_logs',
          title: '??????????????????????',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'global_settings',
          title: '?????????? ??????????????????',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'delivery_and_payment',
          title: '???????????????? ?? ????????????',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'representatives',
          title: '??????????????????????????',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'requisites',
          title: '??????????????????',
          main: true,
          subMenuParents: ['settings'],
        },
      ],
    },
    {
      name: 'shops',
      title: '????????????????',
      icon: 'fa-solid fa-chart-simple',
      main: true,
    },
    {
      name: 'services',
      title: '??????????????',
      icon: 'fa-envelope',
      subMenu: [
        {
          name: 'complaints',
          title: '???????????? ???? ??????????',
          main: true,
          subMenuParents: ['services'],
        },
        {
          name: 'mailing',
          title: '????????????????',
          main: true,
          subMenuParents: ['services'],
        },
        {
          name: 'mail_templates',
          title: '???????????????? ??????????????',
          main: true,
          subMenuParents: ['services'],
        },
      ],
    },
  ],
}
