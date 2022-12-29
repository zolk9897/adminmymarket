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
        selection: {
          save: true,
          setStatus: true,
          notImmediateUpdate: true,
          setStatusColumn: ['status1'],
        },
      },
      data: [
        {
          name: { title: 'Евгений', link: '/' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
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
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1661158177,
          search: 2,
        },
        {
          name: { title: 'Максим', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 32,
          address: 'Москва',
          check: true,
          date: 1666803600,
          search: 1,
        },
        {
          name: { title: 'Сергей', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 60,
          address: 'Москва',
          check: true,
          date: 1666803600,
          search: 0,
        },
        {
          name: { title: 'Павел', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 50,
          address: 'Краснодар',
          check: false,
          date: 1666803600,
          search: 1,
        },
        {
          name: { title: 'Андрей', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: 0,
        },
        {
          name: { title: 'Андрей', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_update_field: 0,
          test_select: 1,
          age: 32,
          address: 'Санкт-Петербург',
          check: true,
          date: 1666803600,
          search: null,
        },
        {
          name: { title: 'Наталья', link: '/mikes' },
          nameHtml: `
          <a :href="#" />
          <strong>aaaa</strong>
          <h3>ddddddd</h3>
          `,
          status: [
            {
              title: 'Доступен',
              color: '#2db7f5',
              upperCase: true,
            },
          ],
          status1: 0,
          test_select: 1,
          test_update_field: 0,
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
          title: 'Имя HTML',
          dataIndex: 'nameHtml',
          key: 'nameHtml',
          resizable: true,
          widget: {
            name: 'html',
          },
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
          title: 'Изменение статуса при сохранении',
          dataIndex: 'status1',
          key: 'status1',
          resizable: true,
          widget: {
            name: 'select',
            type: 'status',
            params: [
              { id: 0, value: 'Опубликован', color: '#87D068' },
              { id: 1, value: 'Отключен', color: '#FF4D4F' },
            ],
          },
          width: 150,
        },
        {
          title: 'Изменение поля (tag)',
          dataIndex: 'test_update_field',
          key: 'test_update_field',
          resizable: true,
          widget: {
            name: 'select',
            type: 'status',
            isEditable: true,
            showLoading: true,
            allowClear: false,
            params: [
              { id: 0, value: 'Обработано', color: '#87D068' },
              { id: 1, value: 'В работе', color: '#FAAD14' },
              { id: 2, value: 'Отказано', color: '#FF4D4F' },
            ],
          },
          width: 150,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeTableCellValue',
                pageName: 'test_table',
                tableName: 'table',
              },
            },
          ],
        },
        {
          title: 'Изменение поля (text)',
          dataIndex: 'test_select',
          key: 'test_select',
          resizable: true,
          widget: {
            name: 'select',
            type: 'text',
            isEditable: true,
            showLoading: true,
            allowClear: false,
            params: [
              { id: 0, value: 'Обработано' },
              { id: 1, value: 'В работе' },
              { id: 2, value: 'Отказано' },
            ],
          },
          width: 150,
          showLoading: true,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeTableCellValue',
                pageName: 'test_table',
                tableName: 'table',
              },
            },
          ],
        },
        {
          title: 'Возраст',
          dataIndex: 'age',
          key: 'age',
          widget: {
            name: 'text',
            class: 'font-bold',
            isEditable: true,
          },
          resizable: true,
          width: 150,
          filterType: 'number',
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
                pageName: 'test_table',
                tableName: 'table',
              },
            },
          ],
        },
        {
          title: 'Адрес',
          dataIndex: 'address',
          key: 'address',
          resizable: true,
          widget: {
            name: 'text',
            isEditable: true,
          },
          width: 200,
          filterType: 'category',
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
                pageName: 'test_table',
                tableName: 'table',
              },
            },
          ],
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
            isEditable: true,
          },
          width: 200,
          filterType: 'daterange',
          sort: true,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
                pageName: 'test_table',
                tableName: 'table',
              },
            },
          ],
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
          sendSingleRow: true,
        },
      ],
    },
  ],
}
