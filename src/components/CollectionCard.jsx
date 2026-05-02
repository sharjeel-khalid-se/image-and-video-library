import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast())
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
          onClick={() => removeFromCollection(item)}
          className="bg-red-500 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
