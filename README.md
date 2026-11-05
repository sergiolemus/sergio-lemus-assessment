## TMBD Coding Assessment

### Basic Requirements

### 1. Simple Application

- Will be using Vite + React for convenient rendering.
- Will be using Tailwind CSS to simplify CSS implementation.

### 2. Fetch Movies

- **Endpoint**: https://api.themoviedb.org/3/discover/movie?api_key={{api_key}}&page=1
- **API Key**: Will be set in a `.env` file given that it's sensitive information.
- **Pagination**: Will be hardcoded to the first page via query param.
- **Request**: Will render raw content on the UI via `useEffect` and `fetch`.
- **Rendering**: Will have basic error handling and loading state.
- **Styling**: None.

### 3. Filtering

- **Query Param**: `&genre=28`
- **Value**: Hardcoded initially to `28`
- **Steps**: Include query param to fetch URL using `URLSearchParams`.

### 4. Sorting

- **Query Param**: `&sort_by=popularity.desc`
- **Value**: Hardcoded initially to `popularity.desc`
- **Steps**: Include query param to fetch URL using `URLSearchParams`.

### 5. Styling

- **Grid**: Use `grid`utility classes, extensible for responsiveness.
- **Card**: Create `<Movie/>` as standalone component with the following props.
  - `title={item.title}`
  - `img={item.poster_path}`
  - `overview={item.overview}`
- **Interaction**: Image will be in the background, with the title and overview appearing on hover.
