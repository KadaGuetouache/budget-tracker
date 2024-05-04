import NavLinks from "./NavLinks";

const DesktopNavbar = async ({ status }: { status: boolean }) => {
  return (
    <nav className="hidden md:block gap-2">
      <NavLinks status={status ? "authenticated" : "unauthenticated"} />
    </nav>
  )
}

export default DesktopNavbar;
