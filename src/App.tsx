import { useState, useEffect } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Progress from "./components/Progress";

export type ItemType = {
	quantity: number;
	name: string;
	isCompleted: boolean;
	id: number;
};

function App() {
	const [itemsList, setItemsList] = useState<ItemType[]>([]);

	// after rendering for the first time, if saved itemsList data exists in local storage, set the itemsList state to the saved data
	useEffect(() => {
		const savedItems = localStorage.getItem("itemsList");
		if (savedItems) {
			try {
				const parsedItems = JSON.parse(savedItems);
				if (Array.isArray(parsedItems)) {
					setItemsList(parsedItems);
				} else {
					console.error("Invalid data format in local storage");
				}
			} catch (error) {
				console.error("Error parsing local storage data", error);
			}
		}
	}, []);

	// whenever the itemsList state changes, save the new state to local storage
	useEffect(() => {
		// don't overwrite valid data with an empty array if there is no list yet
		if (itemsList.length > 0) {
			localStorage.setItem("itemsList", JSON.stringify(itemsList));
		}
	}, [itemsList]);

	return (
		<div className="font-quicksand text-brown w-full h-full flex flex-col">
			<Logo />
			<Form itemsList={itemsList} setItemsList={setItemsList} />
			<PackingList itemsList={itemsList} setItemsList={setItemsList} />
			<Progress itemsList={itemsList} />
		</div>
	);
}

export default App;
