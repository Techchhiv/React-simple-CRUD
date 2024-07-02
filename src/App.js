import {Register, Login} from './component/form.js';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import RootLayer from './layout/RootLayer.js';
import { ListItem } from './component/ListItem.js'; 
import { UpdateUser } from './component/UpdateUser.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayer></RootLayer>}>
      <Route index element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='users' element={<ListItem></ListItem>}></Route>
      <Route path='users/update/:id' element={<UpdateUser/>}></Route>
    </Route>
  )
)

export default function Form(){
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};