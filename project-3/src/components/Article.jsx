import { FiMapPin } from "react-icons/fi";

const Article = ({ details }) => {
  return (
    <article
      className="
    w-full gap-2 grid grid-cols-[140px_1fr] py-5
    sm:grid-cols-[220px_1fr] sm:gap-1 py-8 px-5
    md:grid-cols-[250px_1fr]
    lg:grid-cols-[400px_1fr] lg:py-20 lg:px-10 lg:gap-0
    xl:grid-cols-[500px_1fr]
    2xl:grid-cols-[700px_1fr] 2xl:py-40
    "
    >
      <div>
        <img
          className="
          w-[125px] h-[250px] m-auto
          sm:w-[190px]
          lg:w-[300px] lg:h-[400px]
          xl:w-[350px] xl:h-[450px]
          2xl:w-[500px] 2xl:h-[600px]
          "
          src={details.image}
          alt={details.alt}
        />
      </div>
      <div
        className="
      flex flex-col justify-center
      sm:px-4
      "
      >
        <p
          className="
        flex items-center gap-2 text-xs font-medium mb-4 text-[#2B283A]
        sm:text-sm
        lg:text-lg lg:mb-8
        xl:text-xl xl:mb-15
        2xl:text-2xl 2xl:gap-5 2xl:mb-20
        "
        >
          <span>
            <FiMapPin className="text-red-500" />
          </span>
          {details.country}
          <span>
            <a
              className="underline text-[#918E9B] cursor-pointer"
              href={details.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </span>
        </p>
        <h1
          className="
        font-semibold text-xl text-[#2B283A] mb-3
        lg:text-3xl lg:mb-6
        xl:text-4xl xl:font-bold xl:mb-10
        2xl:text-6xl 2xl:mb-15
        "
        >
          {details.location}
        </h1>
        <h3
          className="
        text-sm font-medium mb-2
        lg:text-lg lg:mb-4
        xl:text-xl xl:mb-6
        2xl:text-2xl 2xl:mb-10
        "
        >{`${details.startDate} - ${details.endDate}`}</h3>
        <p
          className="
        text-sm text-[#2B283A]
        lg:text-lg
        xl:text-xl
        2xl:text-2xl
        "
        >
          {details.description}
        </p>
      </div>
    </article>
  );
};

export default Article;
