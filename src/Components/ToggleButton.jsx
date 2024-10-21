import React from "react";

const ToggleSwitch = ({ isCheckedProp, onToggle }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isCheckedProp} // Use prop to control state
          onChange={onToggle} // Trigger parent's function on change
          className="sr-only peer"
        />
        {/* Toggle switch design without the outline */}
        <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        {/* Toggle label */}
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isCheckedProp ? "Required" : "Optional"}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
