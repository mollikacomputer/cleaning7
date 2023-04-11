import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "../../components/HeroSection";
import { Suspense } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({services}) {
  return (
    <main>
      <HeroSection />
      {/* service section */}
      <section className="">
      <Suspense fallback={<div> Loading...... </div>}>
        {services.map((service) => (
          <div key={service.id} className="card bg-base-100 shadow-xl my-10 mx-10">
            <div className="card-body">
              <h2 className="card-title"> {service.title} </h2>
              <p> {service.body} </p>
              <div className="card-actions justify-end">
                <Link href={`/services/${service.id}`} > 
                <button className="btn btn-primary">read more...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Suspense>
      </section>
      <h2 className="text-3xl">Home page</h2>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=3"
  );
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};
