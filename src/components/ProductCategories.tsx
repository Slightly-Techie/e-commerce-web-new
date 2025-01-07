import CategoryItem from "./CategoryItem";
import Container from "./Container";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const exploreProducts = [
  {
    name: "Computers",
    src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Online Courses",
    src: "https://images.pexels.com/photos/5553048/pexels-photo-5553048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Mobile Phones",
    src: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Games",
    src: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ProductCategories = () => {
  return (
    <Container>
      <div className="mb-4 flex items-center justify-between md:mb-6">
        <h3 className="text-xl font-bold md:text-2xl">Explore</h3>

        {/* <div className="flex gap-3">
            <SwiperButton ref={prevRef} disabled={isPrevDisabled} />
            <SwiperButton ref={nextRef} disabled={isNextDisabled} right />
          </div> */}
      </div>

      <ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {exploreProducts.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Container>
  );
};

export default ProductCategories;
