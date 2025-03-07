// import { RefObject, useEffect } from "react";

// export const useClickOutside = (
//   elRef: RefObject<HTMLElement>,
//   setState: (value: boolean) => void
// ) => {
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (elRef.current && !elRef.current.contains(event.target as Node)) {
//         setState(false);
//         document.body.style.overflow = "";
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [elRef, setState]);
// };




import { RefObject, useEffect } from "react";

export const useClickOutside = (
  elRef: RefObject<HTMLElement | null>, // null qo'shildi
  setState: (value: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elRef.current && !elRef.current.contains(event.target as Node)) {
        setState(false);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [elRef, setState]);
};