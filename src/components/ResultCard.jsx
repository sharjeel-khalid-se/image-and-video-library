import { useDispatch } from "react-redux";
import { addToCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addCollection = (item) => {
    dispatch(addToCollection(item));
    dispatch(addedToast())
  };

  return (
    <div className="w-[22vw] h-80 bg-white gap-6 rounded relative">
      <a className="h-full" target="_blank" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            width={100}
            src={item.thumbnail}
            alt=""
          />
        ) : (
          ""
        )}
        {/* {item.type == "video" ? <video className='h-full w-full object-cover object-center' width={100} src={item.src} muted autoPlay loop></video>: ""} */}
        {item.type == "video" ? (
          <img
            className="h-full w-full object-cover object-center"
            width={100}
            src={item.thumbnail}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center w-full p-6 absolute bottom-0 text-white h-[25%]"
      >
        <h1>{item.title}</h1>
        <button
          onClick={() => addCollection(item)}
          className="bg-blue-800 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
