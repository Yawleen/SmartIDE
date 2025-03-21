import CodeTab from "./CodeTab";
import { useSelector } from "react-redux"
import ButtonTab from "./ButtonTab";
import { useState } from "react";
import Preview from "./Preview";

export default function Tabs() {
    const tabs = useSelector(state => state.tabs);
    const preview = useSelector(state => state.preview);
    const [tabIndex, setTabIndex] = useState(tabs[0].id);

    return (
        <div className="flex grow">
            <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200 pt-5">
                {tabs.map(tab => <ButtonTab key={tab.id} id={tab.id} toggleTab={id => setTabIndex(id)} imgURL={tab.imgURL} buttonContent={tab.buttonContent} active={tabIndex === tab.id} />)}
            </div>
            <div className="relative grow w-full">
                <CodeTab
                    id={tabIndex}
                    code={tabs.find(obj => obj.id === tabIndex).code}
                />
                {preview && <Preview tabs={tabs} />}
            </div>
        </div>
    )
}