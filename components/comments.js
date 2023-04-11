import React from "react";

const comments = () => {
  return (
    <section>
      <h2 className="text-3xl text-center font-bold my-16">
        Customer Reaction
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 px-10">
        <div
          className="card bg-base-100 shadow-xl p-4"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <div>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              facere dolorem natus, aliquid qui distinctio assumenda animi
              consequatur soluta ad.
            </p>
          </div>
          <div className="flex">
            <div className="avatar my-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/user1.jpg" />
              </div>
            </div>
            <div className="card-body text-left align-middle">
              <h3 className="card-title"> Alexander Hernandez </h3>
              <p> San Diego, CA </p>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl p-4"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <div>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo
              eius possimus cumque vel laboriosam.
            </p>
          </div>
          <div className="flex">
            <div className="avatar my-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/user2.jpg" />
              </div>
            </div>
            <div className="card-body text-left align-middle">
              <h3 className="card-title"> James Williams </h3>
              <p> san diego, CA </p>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl p-4"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <div>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              facere dolorem natus, aliquid qui distinctio assumenda animi
              consequatur soluta ad.
            </p>
          </div>
          <div className="flex">
            <div className="avatar my-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/user3.jpg" />
              </div>
            </div>
            <div className="card-body text-left align-middle">
              <h3 className="card-title"> Alexander Hernandez </h3>
              <p> San Diego, california </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default comments;
