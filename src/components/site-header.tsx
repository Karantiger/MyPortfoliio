import { Link } from "@tanstack/react-router";
import {TextAlignEnd } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/achievements", label: "Achievements" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/resume", label: "Resume" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-12 lg:pt-8">
      {/* LOGO / NAME */}
      <Link
        to="/"
        className="group inline-flex items-center"
      >
        <div
          className="
            relative
            h-12 w-12
            overflow-hidden
            rounded-full
            border border-white/10
            bg-gradient-to-br
            from-primary/30
            via-surface
            to-primary/10
            shadow-[0_6px_16px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.25)]
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.3),inset_0_1px_3px_rgba(255,255,255,0.3)]
            sm:h-14 sm:w-14 p-1
          "
        >
          <img
            src="/heroimg.png"
            alt="Karan Kumar Bind"
            className="
              h-full w-full
              rounded-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />

          {/* INNER 3D HIGHLIGHT */}
          <span
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
              bg-gradient-to-br
              from-white/20
              via-transparent
              to-black/10
            "
          />
        </div>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden items-center gap-8 text-sm md:flex">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            activeOptions={{ exact: true }}
            activeProps={{
              className: "text-primary",
            }}
            className="transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/"
          hash="contacts"
          className="transition-colors hover:text-primary"
        >
          Contact
        </Link>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center transition-colors "
            >
              <TextAlignEnd className="h-6 w-6" />
              <span className="sr-only">
                Open menu
              </span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 sm:w-96"
          >
            <SheetHeader className="text-left">
              <SheetTitle>
                Navigation
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-2 text-base">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className:
                      "bg-primary/10 text-primary",
                  }}
                  className="rounded-lg px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/"
                hash="contacts"
                className="rounded-lg px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <div className="absolute bottom-8 left-0 right-0 px-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Karan Kumar Bind
                </span>
                {' '}— Building digital experiences
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}




// import { Link } from "@tanstack/react-router";
// import {
//   TextAlignEnd,
//   X,
// } from "lucide-react";
// import { useState } from "react";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/experience", label: "Experience" },
//   { to: "/achievements", label: "Achievements" },
//   { to: "/skills", label: "Skills" },
//   { to: "/education", label: "Education" },
//   { to: "/resume", label: "Resume" },
// ];

// export function SiteHeader() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-12 lg:pt-8">
//       {/* LOGO */}

//       <Link
//         to="/"
//         className="shrink-0 transition-opacity hover:opacity-80 -ml-10"
//       >
//         <img
//           src="/kkb.png"
//           alt="Karan Kumar Bind Logo"
//           className="h-8 w-auto sm:h-10"
//         />
//       </Link>

//       {/* ========================================
//           DESKTOP NAVIGATION
//       ======================================== */}

//       <div className="hidden items-center md:flex">
//         <div className="relative flex items-center">
//           {/* NAVIGATION LINKS */}

//           <div
//             className={`
//               flex items-center overflow-hidden
//               transition-all duration-500 ease-in-out
//               ${
//                 isNavOpen
//                   ? "mr-4 max-w-[800px] translate-x-0 opacity-100"
//                   : "pointer-events-none mr-0 max-w-0 translate-x-12 opacity-0"
//               }
//             `}
//           >
//             <nav className="flex shrink-0 items-center gap-7 whitespace-nowrap pr-2 text-sm">
//               {links.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   activeOptions={{ exact: true }}
//                   activeProps={{
//                     className: "text-primary",
//                   }}
//                   className="relative py-2 transition-colors hover:text-primary"
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               <Link
//                 to="/"
//                 hash="contacts"
//                 className="relative py-2 transition-colors hover:text-primary"
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>

//           {/* DESKTOP TOGGLE BUTTON */}

//           <button
//             type="button"
//             onClick={() => setIsNavOpen((previous) => !previous)}
//             aria-label={
//               isNavOpen
//                 ? "Close navigation menu"
//                 : "Open navigation menu"
//             }
//             aria-expanded={isNavOpen}
//             className="
//               group
//               relative
//               flex
//               h-11
//               w-11
//               shrink-0
//               cursor-pointer
//               items-center
//               justify-center
//               rounded-full
//               bg-surface
//               transition-all
//               duration-300
//               hover:bg-primary/10
//             "
//           >
//             <span
//               className={`
//                 absolute transition-all duration-300
//                 ${
//                   isNavOpen
//                     ? "rotate-90 scale-0 opacity-0"
//                     : "rotate-0 scale-100 opacity-100"
//                 }
//               `}
//             >
//               <TextAlignEnd className="h-5 w-5 transition-colors group-hover:text-primary" />
//             </span>

//             <span
//               className={`
//                 absolute transition-all duration-300
//                 ${
//                   isNavOpen
//                     ? "rotate-0 scale-100 opacity-100"
//                     : "-rotate-90 scale-0 opacity-0"
//                 }
//               `}
//             >
//               <X className="h-5 w-5 text-primary" />
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* ========================================
//           MOBILE NAVIGATION
//       ======================================== */}

//       <div className="md:hidden">
//         <Sheet>
//           <SheetTrigger asChild>
//             <button
//               type="button"
//               aria-label="Open navigation menu"
//               className="
//                 inline-flex
//                 h-10
//                 w-10
//                 cursor-pointer
//                 items-center
//                 justify-center
//                 rounded-lg
//                 transition-colors
//                 hover:bg-primary/10
//                 hover:text-primary
//               "
//             >
//               <TextAlignEnd className="h-6 w-6" />

//               <span className="sr-only">
//                 Open menu
//               </span>
//             </button>
//           </SheetTrigger>

//           <SheetContent
//             side="right"
//             className="w-80 sm:w-96"
//           >
//             <SheetHeader className="text-left">
//               <SheetTitle>
//                 Navigation
//               </SheetTitle>
//             </SheetHeader>

//             {/* MOBILE LINKS */}

//             <nav className="mt-8 flex flex-col gap-2 text-base">
//               {links.map((link, index) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   activeOptions={{ exact: true }}
//                   activeProps={{
//                     className:
//                       "bg-primary/10 text-primary",
//                   }}
//                   className="
//                     rounded-lg
//                     px-4
//                     py-3
//                     transition-all
//                     duration-300
//                     hover:translate-x-1
//                     hover:bg-primary/10
//                     hover:text-primary
//                   "
//                   style={{
//                     transitionDelay: `${index * 40}ms`,
//                   }}
//                 >
//                   <span className="flex items-center justify-between">
//                     {link.label}

//                     <span className="text-xs text-muted-foreground">
//                       0{index + 1}
//                     </span>
//                   </span>
//                 </Link>
//               ))}

//               <Link
//                 to="/"
//                 hash="contacts"
//                 className="
//                   rounded-lg
//                   px-4
//                   py-3
//                   transition-all
//                   duration-300
//                   hover:translate-x-1
//                   hover:bg-primary/10
//                   hover:text-primary
//                 "
//               >
//                 <span className="flex items-center justify-between">
//                   Contact

//                   <span className="text-xs text-muted-foreground">
//                     07
//                   </span>
//                 </span>
//               </Link>
//             </nav>

//             {/* MOBILE FOOTER */}

//             <div className="absolute bottom-8 left-0 right-0 px-6">
//               <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

//               <p className="mt-4 text-center text-xs text-muted-foreground">
//                 <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-transparent">
//                   Karan Kumar Bind
//                 </span>
//                 {" "}— Building digital experiences
//               </p>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }