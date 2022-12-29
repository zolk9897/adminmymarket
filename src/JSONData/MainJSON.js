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
      title: 'О компании',
      data: about_company,
    },
    {
      name: 'ui_kit',
      title: 'Ui-Kit',
      data: ui_kit,
    },
    {
      name: 'catalog',
      title: 'Каталог',
      data: catalog,
    },
    {
      name: 'catalog_edit',
      title: 'Каталог',
      data: catalog_edit,
    },
    {
      name: 'offer',
      title: 'Офферы',
      data: offer,
    },
    {
      name: 'pages',
      title: 'Офферы',
      data: pages,
    },
    {
      name: 'analytics',
      title: 'Аналитика',
      data: analytics,
    },
    {
      name: 'price_list',
      title: 'Прайс-листы',
      data: price_list,
    },
    {
      name: 'price_list_new',
      title: 'Прайс-лист',
      data: price_list_new,
    },
    {
      name: 'price_edit',
      title: 'Прайс-лист',
      data: price_edit,
    },
    {
      name: 'global_settings',
      title: 'Общие настройки',
      data: global_settings,
    },
    {
      name: 'test_table',
      title: 'Тестовая таблица',
      data: test_table,
    },
    {
      name: 'rates',
      title: 'Ставки',
      data: rates,
    },
    {
      name: 'profile',
      title: 'Профиль',
      data: profile,
    },
    {
      name: 'complaint_form_edit',
      title: 'Редактирование результата заполнения веб-формы',
      data: complaint_form_edit,
    },
    {
      name: 'delivery_and_payment',
      title: 'Доставка и оплата',
      data: delivery_and_payment,
    },
    {
      name: 'representatives',
      title: 'Представители',
      data: representatives,
    },
    {
      name: 'requisites',
      title: 'Реквизиты',
      data: requisites,
    },
    {
      name: 'users_edit',
      title: 'Список пользователей Редактирование',
      data: users_edit,
    },
    {
      name: 'users_list_table',
      title: 'Список пользователей',
      data: users_list_table,
    },
    {
      name: 'complaints',
      title: 'Жалобы на товар',
      data: complaints,
    },
    {
      name: 'mailing',
      title: 'Рассылки',
      data: mailing,
    },
    {
      name: 'mail_templates',
      title: 'Почтовые шаблоны',
      data: mail_templates,
    },
    {
      name: 'tabs_test',
      title: 'Табы тестирование',
      data: tabs_test,
    },
    {
      name: 'settings_logs',
      title: 'Логирование',
      data: settings_logs,
    },
    {
      name: 'shops',
      title: 'Магазины',
      data: shops,
    },
    {
      name: 'shop_template',
      title: '#',
      data: shop_template,
    },
    {
      name: 'base_settings',
      title: 'Базовые настройки',
      data: base_settings,
    },
    {
      name: 'legal_entity_edit',
      title: 'Редактирование юр. лица',
      data: legal_entity_edit,
    },
    {
      name: 'edit_banner',
      title: 'Редактирование банера',
      data: edit_bannerMany,
    },
    {
      name: 'edit_banner_many',
      title: 'Редактирование банера',
      data: edit_bannerMany,
    },
    {
      name: 'edit_banner_one',
      title: 'Редактирование банера',
      data: edit_bannerOne,
    },
    {
      name: 'edit_selection',
      title: 'Редактирование подборки',
      data: edit_selection,
    },
    {
      name: 'banner_groups',
      title: 'Группы баннеров',
      data: banner_groups,
    },
    {
      name: 'user_roles',
      title: 'Настройка ролей',
      data: user_roles,
    },
    {
      name: 'banner_list',
      title: 'Список баннеров',
      data: banner_list,
    },
    {
      name: 'banner_types',
      title: 'Типы баннеров',
      data: banner_types,
    },
    {
      name: 'selections_groups',
      title: 'Группы  подборок',
      data: selections_groups,
    },
    {
      name: 'blog_page',
      title: 'Блог',
      data: blog_page,
    },
    {
      name: 'blog_page_edit',
      title: 'Блог редактирование',
      data: blog_page_edit,
    },
    {
      name: 'page_edit',
      title: 'Редактирование страницы',
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
      title: 'Ставки',
      icon: 'fa-solid fa-arrow-pointer',
      main: true,
    },
    {
      name: 'catalog',
      title: 'Каталог',
      icon: 'fa-solid fa-file-lines',
      subMenu: [
        {
          name: 'catalog',
          title: 'Основной',
          main: true,
          subMenuParents: ['catalog'],
        },
        {
          name: 'offer',
          title: 'Офферы',
          subMenuParents: ['catalog'],
          main: true,
        },
      ],
    },
    {
      name: 'blog_page',
      title: 'Блог',
      icon: 'fa-solid fa-pen-to-square',
      main: true,
    },
    {
      name: 'content',
      title: 'Контент',
      icon: 'fa-folder fa-regular',
      subMenu: [
        {
          name: 'pages',
          title: 'Страницы',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'analytics',
          title: 'Аналитика',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'about_company',
          title: 'О компании',
          subMenuParents: ['content'],
          main: true,
        },
        {
          name: 'price_list',
          title: 'Прайс-листы',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'test_table',
          title: 'Тестовая таблица',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_groups',
          title: 'Группы баннеров',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_list',
          title: 'Список баннеров',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'banner_types',
          title: 'Типы баннеров',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'selections_groups',
          title: 'Группы подборок',
          main: true,
          subMenuParents: ['content'],
        },
      ],
    },
    {
      name: 'settings',
      title: 'Настройки',
      icon: 'fa-sliders',
      subMenu: [
        {
          name: 'users',
          title: 'Пользователи',
          main: true,
          subMenuParents: ['settings'],
          subMenu: [
            {
              name: 'users_list_table',
              title: 'Список пользователей',
              main: true,
              subMenuParents: ['users'],
            },
            {
              name: 'user_roles',
              title: 'Роли',
              main: true,
              subMenuParents: ['users'],
            },
          ],
        },
        {
          name: 'base_settings',
          title: 'Базовые настройки',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'settings_logs',
          title: 'Логирование',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'global_settings',
          title: 'Общие настройки',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'delivery_and_payment',
          title: 'Доставка и оплата',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'representatives',
          title: 'Представители',
          main: true,
          subMenuParents: ['settings'],
        },
        {
          name: 'requisites',
          title: 'Реквизиты',
          main: true,
          subMenuParents: ['settings'],
        },
      ],
    },
    {
      name: 'shops',
      title: 'Магазины',
      icon: 'fa-solid fa-chart-simple',
      main: true,
    },
    {
      name: 'services',
      title: 'Сервисы',
      icon: 'fa-envelope',
      subMenu: [
        {
          name: 'complaints',
          title: 'Жалобы на товар',
          main: true,
          subMenuParents: ['services'],
        },
        {
          name: 'mailing',
          title: 'Рассылки',
          main: true,
          subMenuParents: ['services'],
        },
        {
          name: 'mail_templates',
          title: 'Почтовые шаблоны',
          main: true,
          subMenuParents: ['services'],
        },
      ],
    },
  ],
}
