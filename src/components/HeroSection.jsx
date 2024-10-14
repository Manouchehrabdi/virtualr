import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex  flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        آموزش برنامه نویسی جاوااسکریپت و ریکت از
      </h1>
      <span className="bg-gradient-to-r from-blue-500 to-red-300 text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-8 ">
        {" "}
        مبتدی تا پیشرفته
      </span>
      <p className="mt-12 text-lg text-center text-neutral-500 max-w-4xl ">
        برنامه نویسی یکی از مهم‌ترین مهارت‌هایی است که امروزه نه تنها برای فارغ
        التحصیلان و دانشجویان رشته مهندسی کامپیوتر، بلکه برای سایر رشته‌ها و
        زمینه‌ها نیز به شکل ضروری، مورد نیاز است. هر ساله، بر تعداد موقعیت‌های
        شغلی که مرتبط با برنامه‌نویسی هستند و یا پیش‌نیاز اصلی آن‌ها
        برنامه‌نویسی است، افزوده می‌شود
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-indigo-500 text-slate-50 py-3 px-4 mx-3 rounded-md"
        >
          مشاهده دوره
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md bordre  bg-pink-100 text-indigo-800"
        >
          نظرات دانشجویان
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2  my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default HeroSection;
