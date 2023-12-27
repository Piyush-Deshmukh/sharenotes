import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddNote,
  MyNotes,
  Admin,
  Profile,
  EditNote,
  SingleNote,
} from './pages';
import { Loading } from './components';

// actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addNoteAction } from './pages/AddNote';
import { action as editNoteAction } from './pages/EditNote';
import { action as deleteNoteAction } from './pages/DeleteNote';
import { action as profileAction } from './pages/Profile';
import { action as singleNoteAction } from './pages/SingleNote';

// loaders
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as myNotesLoader } from './pages/MyNotes';
import { loader as editNoteLoader } from './pages/EditNote';
import { loader as adminLoader } from './pages/Admin';
import { loader as singleNoteLoader } from './pages/SingleNote';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddNote />,
            action: addNoteAction,
          },
          {
            path: 'all-notes',
            element: <MyNotes />,
            loader: myNotesLoader,
          },
          {
            path: 'my-notes',
            element: <MyNotes />,
            loader: myNotesLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-note/:id',
            element: <EditNote />,
            loader: editNoteLoader,
            action: editNoteAction,
          },
          {
            path: 'delete-note/:id',
            action: deleteNoteAction,
          },
          {
            path: 'note/:id',
            element: <SingleNote />,
            loader: singleNoteLoader,
            action: singleNoteAction,
          },
          {
            path:'loading',
            element: <Loading />
          }
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;