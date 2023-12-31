# E-Commerce-Shop

This NextJS project is designed to test your skills and help you learn more about NextJS, API integration, and building dynamic web applications. In this README, you will find all the details you need to complete the challenge successfully.

## Project Overview

This project involves creating a dynamic web application using NextJS. You will work with various components, API endpoints, and implement features like filters and searches. The project is divided into several components and pages, each with specific tasks and functionalities.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Run the following command to install the required dependencies, including "json-server":

   ```bash
   npm install

   ```

4. After installing the dependencies, run the following commands to start the development server and API server:

   ```bash
   npm run server

   npm run dev

   ```

## Resources

You can access the following API endpoints:

- http://localhost:5001/banner_content

- http://localhost:5001/about_page

- http://localhost:5001/products

- http://localhost:5001/blogs

## Components

### Header

- The project's navbar.

- Visible on each route.

- Highlights the current page with the active class.

- Toggles the search on click.

- Makes the search form inside the header redirect to the search page on submit.

- Sends the search query to filter blogs and products on that page.

### Footer

- Displayed on each route.

### Banner (Homepage)

- Fetches data for preTitle and title from http://localhost:5001/banner_content.

### CategoryPicker (Homepage)

- Clicking on these should lead to the shop overview page and filter the results.

### FeaturedProducts (Homepage)

- Fetches data for products from [http://localhost:5001/products/?_limit=4].

- Leads to the product detail page on click.

### FeaturedBlogs (Homepage)

- Fetches data for blogs from [http://localhost:5001/blogs/?_limit=3].

- Leads to the blog detail page on click.

### PageTitle (About Page, Shop Detail Page, Blog Detail Page)

- Displays the page title.

- Reusable across other pages.

### AboutContent (About Page)

- Fetches data from [http://localhost:5001/about_page].

### Filters (Shop Overview Page, Blog Overview Page)

- Filters products or blogs by gender or search.

- Supports filter results server-side.

- Provides an "All Products" filter to clear filters.

- Shows a "no results" message when necessary.

### Products List (Shop Overview Page)

- Initially fetches data from [http://localhost:5001/products].
- Filters products using API endpoints.

### Product Detail Data (Shop Detail Page)

- Fetches data for the product from [http://localhost:5001/products/id-of-product].

### Related Products (Shop Detail Page)

- Shows random four products.
- Fetches data from [http://localhost:5001/products?_start=${randomNo}&_limit=4].

### Blogs List (Blog Overview Page)

- Initially fetches data from [http://localhost:5001/blogs].
- Filters blogs using API endpoints.

### Blog Detail Data (Blog Detail Page)

- Fetches data for the blog from [http://localhost:5001/blogs/id-of-blog].

### Related Blogs (Blog Detail Page)

- Shows random three blogs.
- Fetches data from [http://localhost:5001/blogs?_start=${randomNo}&_limit=3].

### Search Page

- Uses the search query sent from the header form.
- Searches through product and blog items.
- Supports filter results using specific endpoints.

## Support

If you encounter any issues, have questions, or need assistance with the challenge, you can reach out to our support team:

Email: nenad.shkurtevski1@gmail.com

## Author

This project was developed by Nenad Shkurtevski, a passionate frontend developer eager to contribute to the open-source community. You can find more of my work and contact me through the following channels:

- LinkedIn: https://www.linkedin.com/in/nenad-shkurtevski-b49b20250/

- Portfolio: https://shkurtevski.dev/

- GitHub: https://github.com/Shkurtevski

Happy coding! 🚀🏆
