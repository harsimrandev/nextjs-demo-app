import React from 'react';

type TabProps = {
    activeTab: string,
    label: string,
    onClick: (tab: string) => void
};

function Tab(props: TabProps) {
    const { activeTab, label, onClick } = props;

    return (
        <p onClick={() => onClick(label)} className= {`cursor-pointer uppercase text-sm ${activeTab === label ? 'font-bold' : 'text-[#767676]'}`}>{label}</p>
    )
}

export default Tab;