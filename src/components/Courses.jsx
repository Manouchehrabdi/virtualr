import { CheckCircle2 } from "lucide-react"
import { CoursesOptions } from "../constants"
const Courses = () => {
  return (
    <div className="mt-2">
      <h2 className="text-2 w-96  text-center my-8 tracking-wider text-slate-50 font-bold bg-indigo-800 py-3 px-4 mx-auto rounded-md" >
       جدیدترین دوره های آموزشی برنامه نویسی</h2>
      <div className="grid grid-cols-4 max-sm:grid-cols-1">
        {CoursesOptions.map((Option, index) => (
            <div key={index} className="p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8 item">
              {Option.title}
              {Option.title === "javascript" && (
                <span className="bg-gradient-to-r bg-indigo-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                  (به همراه دوره رایگان گیت هاب)
                </span>
              )}
            </p>
              </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
