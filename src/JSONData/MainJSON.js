import about_company from './about_company'
import delivery_and_payment from './delivery_and_payment'
import global_settings from './global_settings'
import price_list from './price_list'
import profile from './profile'
import rates from './rates'
import representatives from './representatives'
import requisites from './requisites'
import test_table from './test_table'
import analytics from './analytics'

export default {
  data: [
    {
      name: 'about_company',
      title: 'О компании',
      data: about_company,
    },
    {
      name: 'analytics',
      title: 'Аналитика',
      data: analytics,
    },
    {
      name: 'price_list',
      title: 'Прайс листы',
      data: price_list,
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
  ],
  menu: [
    {
      name: 'rates',
      title: 'Ставки',
      icon: 'fa-solid fa-arrow-pointer',
      main: true,
    },
    {
      name: 'content',
      title: 'Контент',
      icon: 'fa-folder fa-regular',
      subMenu: [
        {
          name: 'analytics',
          title: 'Аналитика',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'aee',
          title: 'Проверка ',
          subMenu: [
            {
              name: 'about_company',
              title: 'О компании',
              subMenuParents: ['aee', 'content'],
              main: true,
            },
          ],
        },
        {
          name: 'price_list',
          title: 'Прайс листы',
          main: true,
          subMenuParents: ['content'],
        },
        {
          name: 'test_table',
          title: 'Тестовая таблица',
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
  ],
}
