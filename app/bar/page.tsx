import Link from "next/link";

export default function Product() {
    return (<div>bar
        <Link 
        className='text-blue-800 block border-2 border-black p-2 m-2 w-fit mb-8'
        href='/'
        >
          Go to home Page
      </Link>
    </div>
        
    )
}