const Slider = () => {
  return (
    <div dir="rtl" className="grid grid-rows-3 grid-flow-col text-right mx-auto w-3/5 mt-12  max-sm:w-full max-sm:grid-rows-4 max-sm:grid-cols-1">
      <div className="row-span-3 max-sm:row-auto">
        <img className="h-2/3 -mr-16 max-sm:mr-0" src="src/assets/profile-pictures/photoman.png" alt="photoman" />
      </div>

      <div className="flex flex-col justify-between p-12 rounded-xl hover:bg-slate-100 ps-4 shadow-md h-60" id="Slider">
        <div className="flex flex-col justify-between ">
          <h2 className="text-2xl flex flex-col justify-between font-bold text-purple-800 ">چرا برنامه نویس شدم؟</h2>
          <p className="text-justify line-clamp-2" id="SliderDesc">سلام، من منوچهرم. سال 92 رشته مهندسی نرم افزار قبول شدم و به هوای اینکه قراره آینده شغلی و مالی خوبی داشته باشم رفتم دانشگاه ولی همون ترم اول متوجه شدم که همه چی دقیقا برعکس تصوراتم بوده و اصلا اون چیزی نیست که فکرشو میکردم و همین جرقه‌ای شد که دنبال یک مهارت دیگه باشم و بعد از کلی تحقیق به برنامه نویسی رسیدم.</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium mt-10" id="More" onClick={() => ShowMore("#SliderDesc", "#More")}>بیشتر</button>
        </div>
      </div>
      <div className="flex flex-col justify-between p-12 rounded-xl hover:bg-slate-100 ps-4 shadow-md h-60" id="Slider1">
        <div className="flex flex-col justify-between ">
          <h2 className="text-2xl flex flex-col justify-between font-bold text-purple-800 ">دوره مقدماتی تا پیشرفته جاوااسکریپت</h2>
          <p className="text-justify line-clamp-2" id="SliderDesc1">بهتر است از این زبان به عنوان آچار فرانسه یاد کنیم. زبانی که به ما این امکان را میدهد تا برنامه های تحت وب(فرانت اند و بک اند)، موبایل(android و ios)،دسکتاپ، بازی و ... راتوسعه بدهیم و همین امر باعث شده تا محبوبیت زیاده داشته باشد و البته این محبوبیت در نهایت منجر به بازار کار فوق العاده آن میشود..</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium mt-10" id="More1" onClick={() => ShowMore("#SliderDesc1", "#More1")}>بیشتر</button>
        </div>
      </div>
      <div className="flex flex-col justify-between p-12 rounded-xl hover:bg-slate-100 ps-4 shadow-md h-60 mb-2" id="Slider1">
        <div className="flex flex-col justify-between ">
          <h2 className="text-2xl flex flex-col justify-between font-bold text-purple-800 ">دوره جامع متخصص ریکت و ریداکس + ریکت ورژن ۱۸</h2>
          <p className="text-justify line-clamp-2" id="SliderDesc2">بی شک ریکت یکی از محبوب ترین لایبرری ها برای طراحی UI است. این لایبرری توسط فیسبوک پشتیبانی میشود و بازار کار و کامیونیتی گسترده‌ای در ایران و سایر کشور ها دارد و یکی از انتخاب ها برای شروع یک مهارت به عنوان برنامه نویس Front end می باشد.</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium mt-10" id="More2" onClick={() => ShowMore("#SliderDesc2", "#More2")}>بیشتر</button>
        </div>
      </div>
    </div>


  )

}
export default Slider;

