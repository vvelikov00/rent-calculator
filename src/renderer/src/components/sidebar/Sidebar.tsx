import { Dispatch, FC, SetStateAction } from "react";
import { MenuItem } from "./MenuItem";

export type Section = "post" | "pre" | "period" | "p" | "more-than-1-year" | "";

type Props = {
  openedSection: Section;
  setOpenedSection: Dispatch<SetStateAction<Section>>;
};

export const Sidebar: FC<Props> = ({ openedSection, setOpenedSection }) => {
  return (
    <>
      <MenuItem
        label="Постнумерандна рента"
        to="post"
        openedSection={openedSection}
        setOpenedSection={setOpenedSection}
      />
      <MenuItem
        label="Пренумерандна рента"
        to="pre"
        openedSection={openedSection}
        setOpenedSection={setOpenedSection}
      />
      <MenuItem
        label="Определяне срока на рентата"
        to="period"
        openedSection={openedSection}
        setOpenedSection={setOpenedSection}
      />
      <MenuItem
        label="P-срочна рента"
        to="p"
        openedSection={openedSection}
        setOpenedSection={setOpenedSection}
      />
      <MenuItem
        label="Рента с период по-голям от 1 година"
        to="more-than-1-year"
        openedSection={openedSection}
        setOpenedSection={setOpenedSection}
      />
    </>
  );
};
