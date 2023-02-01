import ToggleActiveMode from "./ToggleActiveMode";

const Navbar = () => {
  return (
    <div className="flex justify-between py-10 items-center  sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </div>
        <h3 className="ml-6 font-bold">levm</h3>
      </div>

      <ToggleActiveMode />
    </div>
  );
};

export default Navbar;
