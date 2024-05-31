import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const AppLayout = (props) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-50">
      <Header />
      
      <main className="h-full grid grid-cols-1 sm:grid-cols-2 p-8 gap-8">
        {props.children}
      </main>
      
      <Footer />
    </div>
  );
}
