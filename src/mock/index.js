import { createServer } from 'miragejs';
import { getAllAuthors } from '../lib/get-all-authors';

import data from './data.json';

// const filterableAttributes = ['author', 'categories']

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

      const filters = {
        'Authors': allAuthors
      }

      // Loop thought Filterable Attributes - 

      // for (const attribute of filterableAttributes) {
      //   const items = data.posts.map((post, index) => {

      //     console.log(post[attribute])
      //     return post[attribute]
      //   })

      //   console.log()
      //   filterable.push(items)
      // }

      return filters;
    });
  },
});
