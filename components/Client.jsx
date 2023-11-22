import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Rating from "./Rating";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Client = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col mt-20">
        <h5 className="text-[#4D9DE0] text-[20px] font-semibold">
          Clients&rsquo; Testimonials
        </h5>
        <h3
          className={`${dancingScript.className} text-[#FFFFFF] text-6xl font-normal mt-4 text-center`}
        >
          Unforgettable Travel Experiences
        </h3>
      </div>
      <div className="flex items-center justify-center gap-8 mt-20 max-w-6xl mx-auto  flex-col md:flex-row">
        <div className="w-11/12 md:w-1/3 my-6 bg-white text-[#1F2B5F] relative rounded-[30px] p-8 text-center hover:-top-3 duration-500 ease-linear ">
          <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Image
              width={144}
              height={144}
              alt="avatar"
              src={"/assets/images/pexels-italo-melo-2379004.png"}
              className="  w-[100px] h-[100px] rounded-full "
            />
          </div>
          <p className="text-[#1F2B5F] text-sm mt-4">
            &rdquo;I was looking for a unique travel experience, and I found it
            on Ithaka. I booked a private tour of the Pyramids with a local
            guide, and it was amazing! The guide was knowledgeable and
            passionate about Egypt.&rdquo;
          </p>
          <p className="text-xl text-[#1F2B5F]  mt-4">John Smith</p>
          <p className="text-[#1F2B5F] text-sm font-extralight">
            Travel Blogger
          </p>
          <div className="flex items-center justify-center mt-4">
            <Rating />
          </div>
        </div>
        <div className="w-11/12 md:w-1/3 my-6 bg-[#FF785A] text-white relative rounded-[30px] p-8 text-center hover:-top-3">
          <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Image
              width={144}
              height={144}
              alt="avatar"
              src={"/assets/images/pexels-vlad-chețan-2923156.png"}
              className="  w-[100px] h-[100px] rounded-full "
            />
          </div>
          <p className=" text-sm mt-4">
            &rdquo;I was looking for a unique travel experience, and I found it
            on Ithaka. I booked a private tour of the Pyramids with a local
            guide, and it was amazing! The guide was knowledgeable and
            passionate about Egypt.&rdquo;
          </p>
          <p className="text-xl   mt-4">John Smith</p>
          <p className=" text-sm font-extralight">Travel Blogger</p>
          <div className="flex items-center justify-center mt-4">
            <Rating />
          </div>
        </div>
        <div className="w-11/12 md:w-1/3 my-6 bg-white text-[#1F2B5F] relative rounded-[30px] p-8 text-center hover:-top-3 duration-500 ease-linear ">
          <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Image
              width={144}
              height={144}
              alt="avatar"
              src={"/assets/images/pexels-andrea-piacquadio-846741.png"}
              className="  w-[100px] h-[100px] rounded-full "
            />
          </div>
          <p className="text-[#1F2B5F] text-sm mt-4">
            &rdquo;I was looking for a unique travel experience, and I found it
            on Ithaka. I booked a private tour of the Pyramids with a local
            guide, and it was amazing! The guide was knowledgeable and
            passionate about Egypt.&rdquo;
          </p>
          <p className="text-xl text-[#1F2B5F]  mt-4">John Smith</p>
          <p className="text-[#1F2B5F] text-sm font-extralight">
            Travel Blogger
          </p>
          <div className="flex items-center justify-center mt-4">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
