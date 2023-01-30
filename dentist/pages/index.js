import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div
        className="img bg-cover md:py-52  py-20 bg-center   flex flex-col"
        style={{ backgroundImage: `url('/banner.jpeg')` }}
      >
        {/* <img src="/banner.jpeg" className="md:hidden" alt="" /> */}
        <span className="md:text-5xl text-xl  text-gray-700 font-semibold mx-4 md:mx-8 flex space-x-4 items-center ">
          {" "}
          <span className="md:text-5xl text-xl hidden md:block">|</span>
          <span className="mt-1 animate-transx ">
            {" "}
            Dr. Bhaskar Dewangan 
          </span>{" "}
        </span>
        <span className="md:text-base text-xs mx-8 md:mx-16 font-semibold text-gray-800 md:my-2 my-1 animate-transx">Dentist</span>
      </div>

      <section className="text-gray-600 body-font scroll-smooth" id="services">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Services Provided
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full md:object-cover object-center mb-6"
                  src="https://www.rinaldidentalarts.com/wp-content/uploads/2021/02/dental-fillings-closeup.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Filling Cavities
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Filling Cavities
                </h2>
                <p className="leading-relaxed text-base">
                  During a filling, your dentist fills these holes with a
                  substance, such as amalgam or composite.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://northerndentaldesign.com.au/wp-content/uploads/2021/07/Dental-Plaque-Epping.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Dental Extraction
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Tooth Decay Removal
                </h2>
                <p className="leading-relaxed text-base">
                  Your dentist will remove the decayed pulp and clean inside the
                  tooth and root and fill the tooth with a temporary filling.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.ytimg.com/vi/Pz89JoSOFOk/maxresdefault.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Dental Bonding
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Repairing Damaged Teeth
                </h2>
                <p className="leading-relaxed text-base">
                  If you have chipped off just a small piece of tooth enamel,
                  your dentist may repair the damage with a filling.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://www.westervilledental.com/wp-content/uploads/2020/04/shutterstock_637002394-1200x675.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Prophylaxis
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Teeth Cleaning
                </h2>
                <p className="leading-relaxed text-base">
                  Dentist will remove plaque and tartar from the front, back,
                  and sides of teeth using a dental scaler or water stream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
