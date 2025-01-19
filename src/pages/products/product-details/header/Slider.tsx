import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "../../../../assets/images/products/Acer.png";

const images = [0, 1, 2, 3, 4, 5, 6, 7];

const Slider = () => {
  return (
    <div className="flex items-center gap-4 min-[1180px]:ml-20">
      <div className="relative mx-auto w-full max-w-[640px] rounded-[20px] bg-white p-3 shadow-custom min-[1180px]:ml-0 md:p-4 xl:max-w-[740px]">
        <Carousel>
          <CarouselContent className="flex gap-4">
            {images.map((_, index) => (
              <CarouselItem
                key={index}
                className="grid basis-auto place-items-center rounded-xl border border-gray-100 bg-gray75 hover:border-gray300 hover:bg-gray-100 lg:h-[162px] lg:w-[162px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
              >
                <img
                  src={image}
                  alt=""
                  className="h-[70px] w-[90px] md:h-[80px] md:w-[110px] lg:h-[95px] lg:w-[142px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden min-[1180px]:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
