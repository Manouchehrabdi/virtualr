import { testimonials } from "../constants";
const Slider = () => {
  return (
    <div className="mt-2 px-3 ">
      <hr />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2 w-3/4 text-right mx-auto  md:w-3/4 mt-12 ">
        <div className="p-12 border border-neutral-400 rounded-xl hover:bg-slate-100 ps-4  ">
          <h2 className="text-right text-2xl text-blue-950 font-bold">
            چرا برنامه نویس شدم؟
          </h2>
          <p className="text-justify">
            .سلام، من منوچهرم. سال 92 رشته مهندسی نرم افزار قبول شدم و به هوای
            اینکه قراره آینده شغلی و مالی خوبی داشته باشم رفتم دانشگاه ولی همون
            ترم اول متوجه شدم که همه چی دقیقا برعکس تصوراتم بوده و اصلا اون چیزی
            نیست که فکرشو میکردم و همین جرقه‌ای شد که دنبال یک مهارت دیگه باشم و
            بعد از کلی تحقیق به برنامه نویسی رسیدم.
          </p>
        </div>
        


      </div>
    </div>
  );
};

export default Slider;
