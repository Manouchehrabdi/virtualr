import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
const Courses = () => {
  return (
    <div className="mt-2 flex justify-center my-5 rounded-md">
      <h2 className="text-2  text-center my-8 tracking-wider text-slate-300 font-bold bg-indigo-800 py-3 px-4 mx-3 rounded-md" >دوره های آموزشی برنامه نویسی</h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((Option, index) => (
            <div key={index}>
                </div>
        ))};
      </div>
    </div>
  )
}

export default Courses
