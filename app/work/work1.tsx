export default function MyApp() {
    return (<div className="absolute mt-10 bg-green-600  w-[60%] h-[60%] left-[20%]" >
      <div className="relative border-2 w-[10ex] text-center pt-3 pb-3 bg-sky-100 left-[35%] top-[-30px] text-5xl">Banner</div>
      <button className="absolute top-0 border-[1px] right-0 bg-white pl-2 pr-2 hover:bg-gray-300">X</button>
      <div className="absolute w-[10em] h-[10em] bg-white rounded-full left-[-5em] top-[30%]"></div>
      <div className="absolute w-[20em] h-[10em] bg-white rounded-full right-[-10em] bottom-[-5em]"></div>
      <div className="absolute text-center text-white text-center border border-dotted border-white p-[20px] text-3xl left-[32%] top-[38%]">This is css position</div>
    </div>
    )
}