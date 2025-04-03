import Image from 'next/image'
import { Bungee_Tint } from "next/font/google";

const bungee = Bungee_Tint({
  subsets: ["latin"],
  weight: "400",
});

export default function MyApp() {
  return (<div className="w-[80%] border rounded w-100vw ml-20 p-2
    grid
    grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">

    <h1 className={`${bungee.className} "font-bold m-2 p-2"`}>Hello world!!</h1>

    <Image
      className='p-2 m-4'
      src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
      width={150}
      height={150}
      alt="PSU Logo"
    />

    <Image
      className='p-2 m-2'
      src="/jpstreet.avif"
      width={250}
      height={250}
      alt="Picture of the author"/>

    <p className="border rounded m-2 p-2 w-100 bg-blue-100 text-black font">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum eum ab sed iusto ullam tempore necessitatibus non esse illo.
    </p>
    <p className="border rounded m-2 p-2 w-100 bg-pink-100 text-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure doloremque ex blanditiis totam consequatur sed provident doloribus. Dolorum nostrum dignissimos excepturi eius vitae accusamus! Illum quas ullam explicabo sed.
    </p>
    <p className="border rounded m-2 p-2 w-100 bg-purple-100 text-black">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil accusamus eaque natus placeat quod nostrum aspernatur vel assumenda exercitationem quas inventore aperiam quis repudiandae harum, corporis minus esse a. Hic!
    </p>
  </div>
  )
}