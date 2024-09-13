"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const modalRef = useRef(null);

  const triggerOpen = () => {
    setOpen(true);
  
  };

  const triggerClose = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      triggerClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <h1 className="text-center lg:text-8xl font-fira_sans font-bold mt-10">
        Blogs
      </h1>
      <h1 className="text-center lg:text-5xl font-fira_sans font-light mt-10">
        What's New : Talk on Web Development
      </h1>

      <div className="flex justify-center relative flex-wrap">
        <div
          className="h-96 w-96 mt-16 m-4 bg-white rounded-3xl glowing-border text-black"
          onClick={triggerOpen}
        ></div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center w-full h-full  justify-center bg-gray-900 bg-opacity-95 z-10">
            <div
              ref={modalRef}
              className="relative pb-4 w-[90%] md:w-[75%] md:h-[80%] h-[85%] md:mt-24 mt-32 bg-white backdrop-blur-2xl bg-opacity-10 rounded-l-3xl text-black p-4 modal-content"
            >
              <button
                onClick={triggerClose}
                className="absolute top-4 right-4 cursor-pointer text-xl text-white px-3 py-2 bg-white backdrop-blur-2xl bg-opacity-20 rounded-full"
              >
                X
              </button>

              <div className="flex justify-center mb-6">
                <Image
                  src="https://sceptix-club.github.io/website-assets/events/Foss.avif"
                  height={400}
                  width={400}
                  className="rounded-2xl"
                  alt="Event Image"
                />
              </div>


              <div className="text-center md:text-left">
                <p className=" text-center text-2xl md:text-3xl mb-6 text-white">
                  How we make good websites!
                </p>
                <p className="text-sm md:text-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, ullam hic provident totam magnam excepturi
                  doloremque ipsum in vitae cupiditate natus temporibus quos, ad
                  dicta quae illo rem repellendus. Repudiandae! Sed corrupti
                  cumque provident. Magni dolores nisi soluta facere optio
                  itaque totam ex sequi assumenda blanditiis. Perspiciatis unde
                  eos voluptatum nam aspernatur laborum praesentium voluptas,
                  quam optio culpa error qui! Voluptatum quam itaque explicabo
                  facere iure. Eius, amet quibusdam odio quaerat nemo placeat
                  odit adipisci, eveniet dolorum sit ad eum asperiores nesciunt
                  consectetur. Sapiente non, necessitatibus perferendis nostrum
                  eaque mollitia. Impedit ab velit incidunt? Cupiditate maiores
                  rem illo hic officia dolorem sunt ad dolores, facilis vitae
                  debitis impedit neque tempora consectetur repellat minima,
                  voluptates aperiam reiciendis illum fugit fugiat laborum?
                  Itaque veniam nisi magni blanditiis porro ratione omnis
                  nostrum saepe suscipit nemo. Suscipit ipsum libero reiciendis
                  sunt dolorem laudantium nihil ipsa veniam maiores? In
                  inventore rerum eligendi asperiores, voluptas iusto! Ea
                  architecto iure itaque repellat commodi nihil similique
                  molestiae, hic, temporibus ullam eos nesciunt impedit quos? A
                  necessitatibus non unde at consequuntur quos quam molestiae,
                  expedita numquam dolor quis modi? Consequuntur sequi ad,
                  reiciendis illo maiores atque est quis quisquam doloremque
                  temporibus, minus praesentium? Vel eos perspiciatis soluta
                  voluptatibus consequuntur delectus facilis quidem ipsum,
                  commodi, tempora labore quibusdam, eligendi accusantium!
                  Neque nulla repudiandae maiores quia eum officiis eaque
                  voluptate! Molestiae quae error, omnis aut quo consectetur
                  similique necessitatibus ducimus ex voluptates fugiat,
                  laudantium laboriosam voluptatibus repudiandae quis, nostrum
                  autem perferendis. Aliquid voluptate illo, rerum deserunt
                  voluptas cum atque voluptatum minima ullam quibusdam
                  consequatur ducimus facere animi maxime dignissimos
                  praesentium asperiores accusantium saepe placeat ipsam
                  laborum, fugit enim officia. Provident, libero? Distinctio
                  illum id culpa harum explicabo, nam ad in similique
                  praesentium officia rem a totam debitis unde dicta iure? Dicta
                  nisi soluta debitis quam totam, animi mollitia tempora dolorem
                  recusandae?
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className="h-96 w-96 mt-16 m-4 bg-white rounded-3xl glowing-border text-black"
          onClick={triggerOpen}
        ></div>
      </div>

      <style jsx>{`
        /* For WebKit-based browsers */
        .modal-content {
          overflow: auto;
        }

        .modal-content::-webkit-scrollbar {
          width: 4px; /* Very thin scrollbar */
        }

        .modal-content::-webkit-scrollbar-track {
          background: transparent; /* No background */
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #000; /* Black scrollbar */
          border-radius: 2px; /* Optional: rounded corners */
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #555; /* Darker color on hover */
        }

        /* For Firefox */
        .modal-content {
          scrollbar-width: thin; /* Thin scrollbar */
          scrollbar-color: #000 transparent; /* Black scrollbar with no track color */
        }
      `}</style>
    </>
  );
};

export default Page;
