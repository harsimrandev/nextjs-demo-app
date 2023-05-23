import React, { useState } from "react";
import Tab from "@/components/elements/Tab";

type TabsProps = {
    children: JSX.Element[]
  }

function Tabs(props: TabsProps) {
  const { children } = props;
  const [activeTab, setActiveTab] = useState<string>("Details");

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex gap-x-5">
        {children.map((child: any) => {
          return (
            <Tab
              activeTab={activeTab}
              key={child.props["data-label"]}
              label={child.props["data-label"]}
              onClick={onClickTabItem}
            />
          );
        })}
      </div>
      <div className="tab-content mt-3">
        {children.map((child: any) => {
          if (child.props["data-label"] !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </>
  );
}

export default Tabs;
