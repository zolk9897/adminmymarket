import { text } from '@fortawesome/fontawesome-svg-core'

export default {
  page: 'test_table',
  title: 'Тестовая таблица',
  groups: [
    {
      name: 'rates',
      layoutForm: 'vertical',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      style: {
        padding: '24px',
        backgroundColor: '#fff',
        borderBottom: '2px solid #f5f5f5',
      },
      fields: ['title'],
    },
    {
      text: 'Тестовая таблица',
      name: 'title',
      type: 'label',
      style: {
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['p-6', 'bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
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
        pagination: false,
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
            style: {},
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
          },
          width: 200,
          filterType: 'daterange',
          sort: true,
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

const b = {
  page: 'rates',
  title: 'Реквизиты',
  groups: [
    {
      name: 'rates',
      layoutForm: 'vertical',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: ['p-6', 'bg-white', 'flex', 'gap-2', 'items-end'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      fields: ['title', 'link'],
    },
    {
      text: 'Ставки',
      name: 'title',
      type: 'label',
      style: {
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    {
      text: 'Ставки по умолчанию',
      name: 'link',
      type: 'link',
      style: {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '22px',
      },
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['p-6', 'bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      fields: ['table_block'],
    },
    {
      name: 'table_block',
      type: 'div',
      cssClass: ['p-6', 'bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      cssClass: ['p-6', 'bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
      },
      data: [
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 1000,
          city: 'Санкт-Петербург',
          placement: 'test',
          recommendations: 'Страница товара',
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 900,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 800,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 700,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 600,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Samsung',
          category: 'Смартфон',
          price: 500,
          city: 'Москва',
          placement: 'Спец. блок',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 500,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: false,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 500,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: true,
        },
        {
          offer: 'Playstation 5',
          category: 'Игровая приставка',
          price: 400,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          date: 1666803600,
          publish: true,
        },
      ],
      columns: [
        {
          title: 'Предложение',
          dataIndex: 'offer',
          key: 'offer',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'text',
          sort: true,
        },
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'category',
          sort: true,
        },
        {
          title: 'Цена',
          dataIndex: 'price',
          key: 'price',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'number',
          sort: true,
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Размещение',
          dataIndex: 'placement',
          key: 'placement',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Рекомендации',
          dataIndex: 'recommendations',
          key: 'recommendations',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Ставка',
          dataIndex: 'rate',
          key: 'rate',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Опбликован',
          dataIndex: 'publish',
          key: 'publish',
          resizable: true,
          widget: {
            name: 'checkbox',
          },
          width: 200,
          filterType: 'checkbox',
          sort: true,
        },
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date',
          resizable: true,
          widget: {
            name: 'date',
          },
          width: 200,
          filterType: 'daterange',
          sort: true,
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