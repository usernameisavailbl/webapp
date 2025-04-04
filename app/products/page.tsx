import Image from 'next/image';

export default function Product() {
    const products = [
        { name: "Computer",
        description: "Product description computer goes here.",
        image_url: "https://img.advice.co.th/images_nas/pic_product4/A0161803/A0161803_1.jpg"},
        { name: "Laptop core i7",
        description: "Product description laptop goes here.",
        image_url: "https://img.advice.co.th/images_nas/pic_product4/A0157326/A0157326_1.jpg"},
        { name: "Head phone", 
        description: "Product description phone goes here.",
        image_url: "https://img.advice.co.th/images_nas/pic_product4/A0142248/A0142248_1.jpg"},
        { name: "iPad 4th Gen", 
        description: "Product description ipad goes here.",
        image_url: "https://img.advice.co.th/images_nas/pic_product4/A0139721/A0139721_1.jpg"},
        { name: "iPhone 4th Gen", 
        description: "Product description iphone goes here.",
        image_url: "https://img.advice.co.th/images_nas/pic_product4/A0162699/A0162699_1.jpg"},
    ];

    return (<div>
        <h1 className="font-bold text-2xl text-center my-4">Product</h1>
        <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded m-4 p-4 bg-slate-100 mb-6">
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="shadow-lg rounded-md border w-fit bg-green-100 p-2 m-2">
                            <h2>{index + 1}. {product.name}</h2>
                            <p>{product.description}</p>
                            <Image
                                    className='rounded-full p-2 m-4'
                                    src={product.image_url}
                                    width={150}
                                    height={150}
                                    alt="PSU Logo"
                                  />
                            <button className="border bg-pink-200 px-2 py-1 mt-2 rounded hover:font-bold">Buy Now</button>
                        </div>)
                })
            }


        </div>
        <footer className="bg-blue-200 p-2 text-center font-bold text-xl"> ..:: Product footer ::.. </footer>
    </div>
    )
}