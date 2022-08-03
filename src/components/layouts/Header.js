import { Popover, Transition } from "@headlessui/react";
import { LightBulbIcon, MenuIcon, MoonIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ImageLogo from "../../assets/image/logo.ico";
import ToggleButton from "../buttons/ToggleButton";
import {useTheme} from "next-themes";
import DropDownButton from "../buttons/DropdownButton";
import { useRef } from "react";
import { classNames } from "../../helpers/theme";
import { theme } from "tailwindcss/stubs/defaultConfig.stub";

export default function Headers({
  title="Workflow", 
  menus=[],
}) {
  const refDropDownButton = useRef();
  const {theme, setTheme} = useTheme();

  const changeTheme = (dark = false) => {
    setTheme(dark ? 'dark' : 'light');
  }
  const Logo = () => {
    return <div className={style.logo}>
      <Image src={ImageLogo?.src} className={style.logoImg} height={'40'} width={'40'} objectFit={'cover'}/>
      {title && <div className={style.logoTitle}>{title}</div>}
    </div>
  }
  const Navigation = () => {
    return <div className={style.navigation}>
      <NavItems/>
    </div>
  }
  const NavItems = () => {
    return menus.map((menu, index) => <div key={index} className={style.navItem}>
          
    </div>);
  }
  const Account = () => {
    return <div className={style.account}>
      <DropDownButton ref={refDropDownButton} menuBtnIcon={<MenuIcon height={20}/>}>
        <div className={style.popover}>
          <div className={style.darkMode}>
            <span>Dark Mode</span>
            <ToggleButton 
            className={style.toggleButton} 
            iconOn={<LightBulbIcon/>} 
            iconOff={<MoonIcon/>} 
            toggle={changeTheme}
            label={theme}
            value={theme == 'dark'}/>
          </div>
        </div>
      </DropDownButton>
    </div>
  }


  return (
    <div className={style.navbar}>
      <Logo/>
      <Navigation/>
      <Account/>
    </div>
  )
}

const style = {
  navbar: classNames("h-10 flex flex-row items-center",
  theme == 'dark' ? 'bg-gray-800' : 'bg-gray-800 text-white'),
  logo: "flex flex-row items-center cursor-pointer",
  logoImg: "h-full",
  logoTitle: "",
  navigation: "",
  navItem: "",
  account: "flex flex-row items-center ml-auto mr-3",
  popover: "w-full",
  darkMode: "flex flex-row items-center justify-between px-4 py-2",
  toggleButton: "",
}