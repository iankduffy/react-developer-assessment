## Notes 

### Setup

The repo set up didn't work with latest version of Node so I had to use nvm and node 16 to boot the empty app. 

First time using styled components, compared to using tailwind, CSS modules or SCSS, which took a bit of time to learn. 

### State Mangagement 

I decided to use Zustand for state management, which I not used before but definitiy enjoyed using for this task. 

### API 

Made changes to the API for the logic for pagniation and categories, this could also have been filtered on the client side app. 
Add two new routes to get post by ID and get filters. 

### What I do Differently 

- Would of done TDD from the start based on the specs in the readme
- Used SCSS / CSS modules as I not used styled components before (enjoyed trying learning it)
- Structure the Zustand Stores better (Zustand is a new statemanagment to me)
- If I was using styled components I would have created a few reusuable ones ie Flex and Grid
- Using React Router I could of fetch inital data there (similar how I did for the post page) rather than useEffect
- Better Mobile Filters. 

### Feedback 

- Task doesn't current boot on Node 18 which casued issues originally to start up. 
- React Routers has changed with every version so developers might struggle with this (I done nextjs for 5 years so not needed it). 
- Offered variantious of designs to build this task would help. 
- Really enjoyed the task as it was unique and let me learned new stuff - however did become big task. 