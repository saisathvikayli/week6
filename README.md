# Week 6 - React Context, Forms & Full-Stack Employee App

## React Context API
Shared state across components without prop drilling using `createContext`, `useContext`, and a `ContextProvider` wrapper component.

```jsx
export const counterContextObj = createContext();
const { counter, changeCounter } = useContext(counterContextObj);
```

## React Hook Form
Form handling with validation using `react-hook-form`. Built a user form with name, email, and date of birth fields. Submitted entries are displayed in a table below the form.

```jsx
const { register, handleSubmit, formState: { errors } } = useForm();
// validation: required, minLength, maxLength, custom validate
```

## Full-Stack Employee App (MERN)
A complete CRUD app with an Express + Mongoose backend and a React frontend with routing.

**Backend** — REST API on port 2525 with routes for create, read, update, delete on `/emp-api/employees`. Employee schema: `name`, `email` (unique), `mobile`, `designation`, `companyName`.

**Frontend** — React Router with nested routes under a `Rootlayout`:

| Route | Component |
|-------|-----------|
| `/` | Home |
| `/create-emp` | CreateEmp (form + POST) |
| `/list` | List (fetch all, delete, navigate) |
| `/employee` | Employee (view details) |
| `/edit-emp` | EditEmployee (PUT) |

Uses `useNavigate` to move between routes and `useLocation` to pass employee data. `useEffect` fetches employees on mount. `axios` used for delete, `fetch` for other requests.

