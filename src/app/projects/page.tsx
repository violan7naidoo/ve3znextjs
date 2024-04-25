import Link from "next/link";
import Projectspage from "../../components/component/projects";
import Projectspage2 from "../../components/component/projects2";
import Navbar from "../../components/Navbar";
export default function Projects() {
  return (
    <section className=" bg-gray-950">
      <Navbar />
      <Projectspage />
      <Projectspage2 />
    </section>
  );
}
