import React from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface LayoutSwitcherProps {
  currentLayout: "layout1" | "layout2";
  onLayoutChange: (layout: "layout1" | "layout2") => void;
}

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ currentLayout, onLayoutChange }) => {
  return (
    <div className="absolute top-4 right-4 z-50 bg-background p-2 rounded-md shadow-lg">
      <ToggleGroup type="single" value={currentLayout} onValueChange={(value: "layout1" | "layout2") => onLayoutChange(value)} aria-label="Select layout">
        <ToggleGroupItem value="layout1" aria-label="Toggle Layout 1">
          Layout 1 (Split)
        </ToggleGroupItem>
        <ToggleGroupItem value="layout2" aria-label="Toggle Layout 2">
          Layout 2 (Bottom Bar)
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LayoutSwitcher;