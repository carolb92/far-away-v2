import { ItemType } from "../App";

export default function Progress({ itemsList }: { itemsList: ItemType[] }) {
	const completedItems = itemsList.filter((item) => item.isCompleted);
	const progressPercentage =
		completedItems.length > 0
			? Math.round((completedItems.length / itemsList.length) * 100)
			: 0;

	return (
		<div className="bg-teal text-center h-full flex flex-col justify-center font-medium px-10 gap-6">
			<p>
				There {itemsList.length === 1 ? "is" : "are"} {itemsList.length}{" "}
				{itemsList.length === 1 ? "item" : "items"} on your list. So far, you
				have packed {completedItems.length}{" "}
				{completedItems.length === 1 ? "item" : "items"}.
			</p>
			<p>Progress: {progressPercentage}% complete</p>
		</div>
	);
}
