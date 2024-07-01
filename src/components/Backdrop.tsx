import React from "react";

interface BackdropProps {
  closeMenu: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ closeMenu }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-[#111111]/20 backdrop-blur-sm"
      onClick={closeMenu}
    ></div>
  );
};

export default Backdrop;
