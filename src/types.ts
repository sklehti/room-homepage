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
