import { motion, AnimatePresence } from "framer-motion";
import ActiveLink from "../ActiveLink";

function MobileNavbar({ open, setIsOpen }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed md:hidden top-10 w-full h-screen z-50"
        >
          <div className="flex flex-col justify-center items-center gap-4 text-xl font-bold bg-slate-800 text-white py-10 px-10 mx-4 my-6 rounded-lg">
            <ActiveLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </ActiveLink>
            <ActiveLink href="/pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </ActiveLink>
            <ActiveLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </ActiveLink>
            <ActiveLink href="https://listoli.gitbook.io/content-service-api">
              Documentation
            </ActiveLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavbar;
