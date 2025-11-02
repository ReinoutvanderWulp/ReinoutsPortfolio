import type {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router'
import Home from '@/pages/Home.tsx'
import OverMij from '@/pages/OverMij.tsx'
import MijnProjecten from '@/pages/MijnProjecten.tsx'
import Contact from '@/pages/Contact.tsx'
import Details from '@/pages/Details.tsx'

const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/overmij" element={<OverMij />} />
      <Route path="/mijnprojecten" element={<Outlet />}>
        <Route index element={<MijnProjecten />} />
        <Route path=":detailId" element={<Details />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Routing
