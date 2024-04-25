export interface CarouselProp {
  setCaruselView: React.Dispatch<React.SetStateAction<number>>;
  caruselView: number;
}

export enum NavbarStateProps {
  DefaultState = "defaultState",
  OpenState = "openstate",
  CloseState = "closeState",
}

export interface HamburgerStateProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<NavbarStateProps>>;
}

export interface HamburgerProps extends HamburgerStateProps {
  openMenu: NavbarStateProps;
}

export interface ArrayButtonClassProp {
  navRef: React.RefObject<HTMLDivElement>;
  setMoveImgCarousel: React.Dispatch<React.SetStateAction<number>>;
  currentEntry: number;
  setCurrentEntry: React.Dispatch<React.SetStateAction<number>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<NavbarStateProps>>;
  openMenu: NavbarStateProps;
}
