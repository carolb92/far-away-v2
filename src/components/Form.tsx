import React, { useState } from "react";
import { ItemType } from "../App";
// import { ItemsContext } from "../App";

type FormProps = {
	itemsList: ItemType[];
	setItemsList: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function Form({ itemsList, setItemsList }: FormProps) {
	const formStyle = {
		display: "flex",
		gap: "1rem",
	};

	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);

	const addItem = (e: React.FormEvent) => {
		e.preventDefault();
		const newItem = { quantity, name, isCompleted: false, id: Date.now() };
		setItemsList([...itemsList, newItem]);
		setName("");
		setQuantity(1);
	};

	return (
		<div className="bg-dark-orange py-10 px-5 flex flex-col md:flex-row items-center justify-center gap-3">
			<h3 className="text-lg font-semibold">What do you need for your trip?</h3>
			<form style={formStyle} onSubmit={addItem}>
				<label htmlFor="quantity-select" />
				<select
					name="quantity"
					id="quantity-select"
					onChange={(e) => setQuantity(Number(e.target.value))}
					value={quantity}
					className="rounded-full bg-light-yellow w-16 indent-2"
				>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Add an item"
					onChange={(e) => setName(e.target.value)}
					value={name}
					className="rounded-full bg-light-yellow indent-3"
				/>
				<button className="uppercase bg-teal rounded-full px-4 py-1">
					<span className="text-semibold">ADD</span>
				</button>
			</form>
		</div>
	);
}
