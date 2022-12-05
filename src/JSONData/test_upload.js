export default {
  page: 'test_upload',
  title: 'Upload TEst',
  groups: [
    {
      name: 'edit_baner_tab',
      fields: ['edit_banner__title_block', 'edit_banner__container_block'],
    },
  ],
  fields: [
    {
      name: 'edit_banner__title_block',
      type: 'div',
      style: {},
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_1'],
    },
    {
      text: 'Uplaod Test',
      name: 'title_1',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'edit_banner__container_block',
      type: 'div',
      style: {},
      cssClass: ['bg-white', 'p-6'],
      fields: ['block__content1_uploadD'],
    },

    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content1_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
  ],
}
