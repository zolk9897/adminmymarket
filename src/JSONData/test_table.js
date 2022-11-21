import { text } from '@fortawesome/fontawesome-svg-core'

export default {
  page: 'test_table',
  title: 'Тестовая таблица',
  groups: [
    {
      name: 'rates',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: [
        'p-6',
        'bg-white',
        'border-b-solid',
        'border-b-2',
        'border-b-#f5f5f5',
        'font-medium',
        'text-xl',
        'leading-5',
      ],

      fields: ['title'],
    },
    {
      text: 'Тестовая таблица',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl', 'leading-5'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['p-6', 'bg-white'],
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      cssClass: ['bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
      },
      data: [
        {
          name: { title: 'Евгений', link: '/mikes' },
          status: [
            {
              id: 'iqeouhifd98io3f',
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
            {
              id: 'iqeouhifd23232323o3f',
              title: 'Удален',
              color: '#f50',
              upperCase: true,
            },
            {
              id: 'iqe823y9fhui',
              title: 'Готов к выдаче',
              color: '#87d068',
              upperCase: true,
            },
          ],
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: 2,
        },
        {
          name: { title: 'Максим', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 32,
          address: 'Москва',
          check: true,
          date: 1666803600,
          search: 1,
        },
        {
          name: { title: 'Сергей', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 60,
          address: 'Москва',
          check: true,
          date: 1666803600,
          search: 0,
        },
        {
          name: { title: 'Павел', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 50,
          address: 'Краснодар',
          check: false,
          date: 1666803600,
          search: 1,
        },
        {
          name: { title: 'Андрей', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: 0,
        },
        {
          name: { title: 'Андрей', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: null,
        },
        {
          name: { title: 'Наталья', link: '/mikes' },
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: null,
        },
      ],
      columns: [
        {
          title: 'Имя',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          widget: {
            name: 'link',
            type: 'external', // external || router
          },
          filterType: 'text',
          width: 150,
        },
        {
          title: 'Статус',
          dataIndex: 'status',
          key: 'status',
          resizable: true,
          widget: {
            name: 'tags',
          },
          width: 150,
        },
        {
          title: 'Возраст',
          dataIndex: 'age',
          key: 'age',
          widget: {
            name: 'text',
            class: 'font-bold',
          },
          resizable: true,
          width: 150,
          filterType: 'number',
        },
        {
          title: 'Адрес',
          dataIndex: 'address',
          key: 'address',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'category',
        },
        {
          title: 'Чек',
          dataIndex: 'check',
          key: 'check',
          widget: {
            name: 'checkbox',
          },
          width: 200,
          filterType: 'checkbox',
        },
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
          resizable: true,
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 200,
          filterType: 'daterange',
          sort: true,
        },
        {
          title: 'Поиск',
          dataIndex: 'search',
          key: 'search',
          resizable: true,
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
              { id: 2, value: 'xiaomi' },
            ],
          },
          width: 200,
          filterType: 'select',
        },
        {
          title: 'Действия',
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 20,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
      ],
    },
  ],
}
