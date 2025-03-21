import { useDispatch } from "react-redux";
import { hidePreview } from "../features/preview";

export default function ButtonTab({ id, toggleTab, buttonContent, imgURL, active }) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        toggleTab(id);
        dispatch(hidePreview());
    };

    return (
        <button onClick={handleOnClick} className={`flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none ${active && "bg-slate-600"}`}>
            <img src={imgURL} className="w-5" alt="" />
            <span className="ml-3 text-slate-300 text-md">{buttonContent}</span>
        </button>
    )
}