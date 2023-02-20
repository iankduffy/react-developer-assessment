import { createServer } from 'miragejs';
import { getAllAuthors } from '../lib/get-all-authors';
import { getAllCategories } from '../lib/get-all-categories';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (request) => {
      console.log(request)
      return data;
    });

    this.get('/posts/length', () => {
      return data.posts.length;
    });

    this.get('/posts/filterableAttributes', async () => {
      const allAuthors = await getAllAuthors(data.posts)
      const allCategories = await getAllCategories(data.posts)

      console.log(allCategories)

      const filters = {
        'Categories': allCategories,
        'Authors': allAuthors,
      }

      return filters;
    });
  },
});
