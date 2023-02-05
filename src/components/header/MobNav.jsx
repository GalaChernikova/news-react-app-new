import Logo from "./Logo";
import MobileButton from "./MobileButton";

export default function MobNav() {
  return (
    <div className="flex items-center  hidden md:flex md:w-full md:justify-between">
      <MobileButton />
      <Logo />
    </div>
  );
}
