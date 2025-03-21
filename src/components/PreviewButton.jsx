import showView from "../assets/view.svg";
import hideView from "../assets/hide.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togglePreview } from "../features/preview";

export default function PreviewButton() {
    const showPreview = useSelector(state => state.preview)
    const dispatch = useDispatch();
    const handleOnClick = () => dispatch(togglePreview());

    return (
        <button className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50" onClick={handleOnClick}>
            <img className="w-5 mr-3" src={showPreview ? hideView : showView} alt="" />
            <span>
                {showPreview ? "Hide" : "Show"} Preview
            </span>
        </button>
    )
}