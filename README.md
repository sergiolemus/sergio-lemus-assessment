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

### Target Extras

### 1. Resposiveness

- **Grid**: Use Tailwind CSS breakpoints.

### 2. Add CSS Transitions

- **Interaction**: Add smooth transition to hover styles for `<Movie/>`

### 3. UI for Filtering + Sorting

- **Filtering:** Render dropdown of genres,
  - Initialize `filter` state in overarching component.
  - `onChange`, set the state to the selected option.
  - Hardcode API options for simplicity.
  - Render `item.name` as values.
- **Sorting**: Create `<Sort/>` component.
  - Initialize `sort` state in overarching component.
  - `onChange`, set the state to the selected option.
  - Hardcode options as no API is available.

### Other Extras

### 1. Adjust element sizing based on rating

- Opted to not implement this one since relative sizing is difficult to make presentable from scratch without spending a lot of time.
- Even with AI, it would be risky to try to time box this one without compromising time for the rest.

### 2. Implement a different layout option for the posters

- Opted to not implement this one since it usually requires abstracting logic and components into the overaching styles.
- I would choosen List View.
- The overhead in styling and not duplicating functionality, made this risky to implement within the time frame.
