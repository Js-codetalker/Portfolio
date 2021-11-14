import { Tooltip as MantineTooltip } from "@mantine/core";
import React, { useState } from "react";
interface ToolTipProps {
  label: string;
}
const useTooltip = (): [() => void, () => void, React.FC<ToolTipProps>] => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTooltip = () => setIsOpen(false)
  const openTooltip = () => setIsOpen(true)
  const ToolTip: React.FC<ToolTipProps> = ({ label, children }) => {
    return (
      <MantineTooltip
        transition="pop"
        wrapLines
        arrowSize={3}
        width={220}
        transitionDuration={200}
        transitionTimingFunction="ease"
        withArrow
        opened={isOpen}
        label={label}
        classNames={{
          body: "text-center py-10"
        }}
      >
        {children}
      </MantineTooltip>
    );
  };
  return [openTooltip, closeTooltip, ToolTip];
};

export default useTooltip;
