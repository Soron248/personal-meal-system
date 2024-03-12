import User from "@/components/User";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 my-10">
        <div>
          <h1 className="text-6xl font-bold text-center  text-red-600 font-mono">
            JOLooJOG
          </h1>
          <p className="text-right text-indigo-500 font-bold">MEAL SYSTEM</p>
        </div>

        <div className="w-48 p-5 rounded-md bg-gradient-to-tl to-indigo-500 from-rose-600 text-white flex flex-col justify-center items-center gap-5">
          <h2 className="text-4xl font-bold">5000 /-</h2>
          <p className="font-semibold">CASH AVAILABLE</p>
        </div>
      </div>

      <div className="w-full m-5">
        <User />
      </div>
    </div>
  );
}
