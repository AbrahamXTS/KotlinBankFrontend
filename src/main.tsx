import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.tsx";
import { CreateAccountForm, CreateCustomerForm, Customer, ListCustomers } from "./routes";
import { getCustomer } from "./services/customers.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <ListCustomers />,
			},
			{
				path: "customer/:clientNumber",
				element: <Customer />,
				loader: async ({ params }) => {
					return getCustomer(params.clientNumber);
				}
			},
			{
				path: "customer/add",
				element: <CreateCustomerForm />,
			},
			{
				path: "account/add",
				element: <CreateAccountForm />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<RouterProvider router={router} />
	</ChakraProvider>
);
