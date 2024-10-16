import { ItemType } from "../App";

type ItemProps = {
	index: number;
	item: ItemType;
	itemsList: ItemType[];
	setItemsList: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function Item({
	index,
	item,
	itemsList,
	setItemsList,
}: ItemProps) {
	const handleDelete = (id: number) => {
		const newList = itemsList.filter((item) => item.id !== id);
		setItemsList(newList);
	};

	const toggle = (id: number) => {
		const newList = itemsList.map((item) =>
			item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
		);
		setItemsList(newList);
	};

	return (
		<li key={index} className="flex justify-center gap-2">
			<input
				type="checkbox"
				name={`item-${index}`}
				id={`item-${index}`}
				checked={item.isCompleted}
				onChange={() => toggle(item.id)}
			/>
			<label
				htmlFor={`item-${index}`}
				className="flex gap-4 items-center justify-center"
			>
				<span
					className={`text-light-yellow ${item.isCompleted && "line-through"}`}
				>
					{item.quantity} {item.name}
				</span>
			</label>
			<button
				onClick={() => handleDelete(item.id)}
				className="bg-light-yellow rounded-full px-2"
			>
				delete
			</button>
		</li>
	);
}
