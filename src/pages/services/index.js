import Head from "next/head";
import { Suspense } from "react";

const index = ({ services }) => {
  return (
    <div>
      <Head>
        <title> Service || carpet cleaning service </title>
      </Head>
      <h2 className="text-3xl">service Page {services.length}</h2>
      <Suspense fallback={<div> Loading...... </div>}>
        {services.map((service) => (
          <div className="card bg-base-100 shadow-xl my-10 mx-10">
            <div className="card-body">
              <h2 className="card-title"> {service.title} </h2>
              <p> {service.body} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">read more...</button>
              </div>
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=100"
  );
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};
export default index;
