import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import cartStore from "./utils/cartStore";
import Cart from "./components/Cart.";
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
    const [newName, setNewName] = useState("");

    useEffect(() => {
        setNewName("Krushna")
    }, [])



    return (<Provider store={cartStore}>
        <UserContext.Provider value={{ loggedInUSer: newName, setNewName }}>
            <div className="app">
                <Header></Header>
                <Outlet></Outlet>
            </div></UserContext.Provider></Provider>


    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>

            }, {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}> <Grocery /></Suspense>
            },
            {
                path: "/restraunts/:resID",
                element: <RestroMenu></RestroMenu>
            },
            {
                path: "/Cart",
                element: <Cart></Cart>
            }],
        errorElement: <Error></Error>
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);