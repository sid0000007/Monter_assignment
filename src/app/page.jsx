import Header from "./components/Api_calls";
import { Navbar } from "./components/Navbar";
import ReportTable from "./components/Table";

export default function Home() {
  return (
    <>
    <section className="main">
      <section className="navbar">
        <Navbar/>  
      </section>
      <section className="Hero">
        <ReportTable/>
      </section>
    </section>
    </>
  );
}
