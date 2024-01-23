"use client";

import { ReactNode } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Drawer } from "vaul";
import useWindowSize from "#/lib/hooks/use-window-size";

export default function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover;
  setOpenPopover;
}) {
  const { isMobile } = useWindowSize();

  if (isMobile) {
    return (
      <Drawer.Root
        open={openPopover}
        onOpenChange={setOpenPopover}
        shouldScaleBackground
      >
        <div className="md:hidden">{children}</div>
        <Drawer.Overlay className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-40 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white">
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-gray-300" />
            <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white pb-8 align-middle shadow-xl">
              {content}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <PopoverPrimitive.Root open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverPrimitive.Trigger className="hidden md:inline-flex" asChild>
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        sideOffset={4}
        align={align}
        className="z-20 hidden animate-slide-up-fade items-center rounded-md border border-gray-200 bg-white drop-shadow-lg md:block"
      >
        {content}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}
