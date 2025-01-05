import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-cente mb-16">
      <div className="flex items-center gap-4">
        <img src="/vinay.webp" alt="Logo" className="h-12 w-12 rounded-full" />
        <div className="flex flex-col">
          <p className="text-text-primary font-bold text-md">Vinay Kumar</p>
          <p className="text-text-secondary font-normal text-sm">
            Fullstack Developer
          </p>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
