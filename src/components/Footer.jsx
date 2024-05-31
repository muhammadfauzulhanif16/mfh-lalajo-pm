export const Footer = (props) => {
  return (
    <footer
      className="h-20 border-t-2 border-neutral-200 flex justify-center items-center font-semibold text-sm">
      © Lalajo, {new Date().getFullYear()} by Muhammad Fauzul Hanif
    </footer>
  );
}
