import { format } from "date-fns";
import {Link} from "react-router";

const TipsCard = ({data}) => {
	return (
		<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
			<div className="mb-3">
				<h2 className="text-2xl font-semibold text-gray-800 border-l-4 pl-2 border-(--primary-color)">
					{data.title}
				</h2>
			</div>

			<p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
				{data.content}
			</p>

			<div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700 border-t border-gray-200 pt-3">
				<div className="space-y-1">
					<p>
						<span className="font-semibold">By: </span>
						{data.author}
					</p>
					<p>
						<span className="font-semibold">Upvotes: </span>
						{data.upvotes}
					</p>
					<p>
						<span className="font-semibold">Created At: </span>
						{format(new Date(data.createdAt), "EEEE, dd MMMM yyyy")}
					</p>
				</div>


				<Link to={"/"}>
					<p className="text-(--primary-color) font-semibold hover:underline">Read Article →
					</p>
				</Link>
			</div>
		</div>
	);
};

export default TipsCard;
