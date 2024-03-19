import "./App.css";
import Img from "./image1.png";
import Rem from "./rem.png";
import Google from "./google.png";

function App() {
  return (
    <div className="container max-w-[1440px] w-full m-auto flex justify-between mb-8 bg-white mt-8 pl-[10px] pr-[10px] max-xl:flex-col ">
      <img
        className="max-w-[720px] max-h-[900px]  w-full h-full max-xl:relative"
        src={Img}
        alt="img"
      />
      <div className="mt-[242px] max-xl:absolute ml-[5px] mt-[50px] max-sm:mt-[10px]">
        <div>
          <p className="text-base text-black opacity-80 font-normal mb-px max-xl:text-white">
            Welcome back
          </p>
          <h1 className="text-3xl font-bold mb-6 max-xl:text-white max-sm:mb-[0px] mr-[10px] font-[16px]">
            Login to your account
          </h1>
          <p className="text-black opacity-80 font-normal mb-3 max-xl:text-white max-sm:mb-[0px] mt-[0px]">
            Email
          </p>
          <input
            className="rounded-md box-border border-2 pl-[20px] pt-4 pb-4 w-[347px]  placeholder:text-slate-400 block bg-white max-sm:mb-[0px] w-[290px] pt-1 pb-1"
            type="email"
            placeholder="John.snow@gmail.com"
          />
          <p className="text-black opacity-80 font-normal mb-3 mt-3 max-xl:text-white max-sm:mb-[0px] mt-[0px]">
            Password
          </p>
          <input
            className="rounded-md box-border border-2 pl-[20px] pt-4 pb-4 w-[347px] placeholder:text-slate-400 block bg-white max-sm:mb-[0px] w-[290px] pt-1 pb-1"
            type="password"
            placeholder="********"
          />

          <ul className="flex items-center  mt-7 mb-[5px] max-sm:mt-[0px]">
            <li className="flex items-center mr-[69px] max-xl:mr-[70px] max-sm:mr-[60px] ">
              <img className="cursor-pointer mr-3" src={Rem} alt="img" />
              <span className="text-sm max-xl:text-white">Remember me</span>
            </li>
            <a className="text-sm text-teal-600" href="#link">
              Forgot password?
            </a>
          </ul>

          <button
            className="bg-green-500 block w-[347px] rounded-md pt-5 pb-5 font-bold text-white text-base hover:text-black mb-3.5 w-[290px] pt-1.5 pb-1.5"
            type="submit"
          >
            Login now
          </button>
          <button
            className="mb-[142px] justify-center bg-slate-800 flex items-center block w-[347px] rounded-md pt-5 pb-5 font-bold text-white text-base   max-xl:mb-[50px]  max-sm:mb-[10px] w-[290px] pt-1.5 pb-1.5"
            type="submit"
          >
            <img
              className="mr-2"
              src={Google}
              alt="google"
              width={20}
              height={20}
            />
            Or sign-in with google
          </button>
        </div>
        <span className="ml-[37px] max-xl:text-white ml-[10px] max-sm:ml-[10px]">
          Dont have an account?
          <a className="text-teal-400 ml-2" href="#link">
            Join free today
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
