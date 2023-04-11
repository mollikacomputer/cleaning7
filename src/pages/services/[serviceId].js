import { useRouter } from "next/router";
import React from "react";

const serviceDetails = ({ service }) => {
    const router = useRouter();
    const handleBackToHome = () =>{
        router.push('/services');
    }
  return (
    <div className="card bg-base-100 shadow-xl my-10 mx-10">
      <div className="card-body">
        <h2 className="card-title"> {service.title} </h2>
        <p> {service.body} </p>
        <div className="card-actions justify-end">
            <button onClick={handleBackToHome} className="btn btn-primary">Back to Post</button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.serviceId}`
  );
  const data = await res.json();
  return {
    props: {
      service: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const services = await res.json();
  const paths = services.map((service) => {
    return {
      params: {
        serviceId: `${service.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default serviceDetails;
