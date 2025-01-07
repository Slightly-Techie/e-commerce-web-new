import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import image from "../../../../assets/images/products/Acer.png";

const images = [0, 1, 2, 3, 4, 5, 6, 7];

const Slider = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative mx-auto w-full max-w-[640px] rounded-[20px] bg-white p-3 shadow-custom md:mx-0 md:ml-0 md:p-4 xl:max-w-[740px]">
        <Carousel>
          <CarouselContent className="">
            {images.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={image}
                  alt=""
                  className="h-[70px] w-[90px] md:h-[80px] md:w-[110px] lg:h-[95px] lg:w-[142px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
