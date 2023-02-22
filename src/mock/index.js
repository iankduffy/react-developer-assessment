import { getFilteredPosts } from 'lib/get-filtered-posts';
import { createServer } from 'miragejs';
import { paginate } from '../lib/array-paginate';
import { getAllAuthors } from '../lib/get-all-authors';
import { getAllCategories } from '../lib/get-all-categories';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', async (schema, request) => {
      const { page = 1, per_page = 10, categories = null, authors = null } = request.queryParams
      const filtersPosts = await getFilteredPosts({categories, authors, posts: data.posts})
      const paginatedPosts = await paginate(filtersPosts, Number(per_page), Number(page) - 1)
      const totalPages = Math.ceil(filtersPosts.length / per_page)

      const postsResponse= {
        posts: paginatedPosts, 
        currentPage: page, 
        totalPages
      }

      return postsResponse;
    });

    this.get('/posts/filterableAttributes', async () => {
      const allAuthors = await getAllAuthors(data.posts)
      const allCategories = await getAllCategories(data.posts)

      console.log(allCategories)

      const filters = [{
        name: 'Categories', 
        items: allCategories
      },
      {
        name: 'Authors', 
        items: allAuthors
      }]

      return filters;
    });
  },
});
