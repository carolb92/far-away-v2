import { useState } from "react";
import Item from "./Item";
import { ItemType } from "../App";

type PackingListProps = {
	itemsList: ItemType[];
	setItemsList: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function PackingList({
	itemsList,
	setItemsList,
}: PackingListProps) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") sortedItems = itemsList;
	else if (sortBy === "quantity")
		sortedItems = itemsList.slice().sort((a, b) => a.quantity - b.quantity);
	else if (sortBy === "name")
		sortedItems = itemsList
			.slice()
			.sort((a, b) => a.name.localeCompare(b.name));
	else if (sortBy === "completed")
		sortedItems = itemsList
			.slice()
			.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

	function clearList() {
		const confirm = window.confirm("Are you sure you want to clear your list?");
		if (confirm) setItemsList([]);
	}

	return (
		<div className="bg-brown min-h-[50%] md:min-h-[65%] lg:min-h-[50%] py-6 md:py-10 flex flex-col justify-between">
			<ul className="flex flex-wrap justify-start px-6 md:px-16 lg:px-36 lg:py-6 gap-4 md:gap-10 gap-y-5 lg:gap-y-10 lg:gap-x-14">
				{sortedItems?.map((item, index) => (
					<Item
						key={index}
						index={index}
						item={item}
						itemsList={itemsList}
						setItemsList={setItemsList}
					/>
				))}
			</ul>
			<div className="flex self-center w-full justify-center gap-4">
				<select
					name="sort"
					id="sort-selector"
					className="rounded-full bg-light-yellow indent-2 uppercase px-2 py-1 text-sm font-medium min-w-52"
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">Sort by input order</option>
					<option value="quantity">Sort by quantity</option>
					<option value="name">Sort by name</option>
					<option value="completed">Sort by completed</option>
				</select>
				<button
					className="rounded-full bg-light-yellow indent-2 uppercase px-2 py-1 text-sm font-medium"
					onClick={clearList}
				>
					CLEAR LIST
				</button>
			</div>
		</div>
	);
}
