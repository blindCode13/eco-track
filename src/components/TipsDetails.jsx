import { FaLeaf, FaThumbsUp } from "react-icons/fa";
import useFetchedData from "../hooks/useFetchedData";
import LoadingState from "./LoadingState";
import { useParams } from "react-router";
import NotFound from "./NotFound";
import { format } from "date-fns";

const TipDetails = () => {
    const {id} = useParams();
    const [tip, loading] = useFetchedData(`/tips/${id}`, {params: {dataLimit: 0}});
    if (loading) { return <LoadingState></LoadingState> }
    if (tip.length === 0) {return <NotFound></NotFound>}
  return (
    <div className="mt-18 flex items-center justify-center global-p-x py-14 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full space-y-6">

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
            <FaLeaf className="text-(--primary-color)" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{tip.title}</h2>
            <p className="text-sm text-gray-500">{tip.category}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{tip.content}</p>

        <div className="border-t pt-4 text-sm text-gray-600 flex flex-col gap-1">
          <p>
            Posted by{" "}
            <span className="font-semibold text-(--primary-color)">
              {tip.authorName}
            </span>
          </p>
          <p>Email: {tip.author}</p>
          <p>Upvotes: {tip.upvotes}</p>
          <p>Created At: {format(new Date(tip.createdAt), "EEEE, dd MMMM yyyy")}</p>
        </div>

      </div>
    </div>
  );
};

export default TipDetails;
