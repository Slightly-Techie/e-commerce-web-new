import useSwiper from "@/hooks/useSwiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import Container from "./Container";
import SwiperButton from "./SwiperButton";

const exploreProducts = [
  {
    name: "Computers",
    src: "https://s3-alpha-sig.figma.com/img/6ff1/d3aa/8f4ea800e6535bf6849a3302a70b3e7b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JQ~AVZJTXcb-4MQoit38rDhB1ZVrx7qSxmiGRoBto5Ud0RxE70owopjtPpVHNH1I2DfOyF4cE6Bs0hWhEgXGu3chQMhNJCS5nZSGM6-Y7gW0IEqRV2lhZpGF-9R-CfQZF71AEmuOXfgpgBkw8jguM7DTgAREnNjyMAqBkVkuJF6Su48BNzCdbZXOgCT03Iwxdo11TzkoXq0Z02IeVKaNym~E3L34cE-DyBhIueD-afRbmX5V-85MdiCkDXMBEh~8opQ8g~GK5Y~LBzFTrKYH-aDsHqA5Bcw7ks2iPtTL2QPnW470q~-lreYuBvDKR3o-8QhHiajdRJ40xnSefZeerQ__",
  },
  {
    name: "Online Courses",
    src: "https://s3-alpha-sig.figma.com/img/d56c/43f2/2d62ac057dda4dd78964233f79f8a218?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atBoThlil5vs3DK-ZK556J4MWwUpFxzhpJrSv-Fgp9ZiGCi8apLQJFfugcnw9ne682idVNDXZoeDiLz7RLUcRGVi4vnnPYAYkD83Ju71T8ii1dIi9UH613hGyQJc5ZDT-cN6fjxMlywODAYQINPQaTjnp3kBo2iKkLjrzvEJVI0Emk~rlauz91n--B9RG~89xhs-C8SooqIancv20I1Pha9sFnduIV2s15HGCTTrhqXLNmTPkfo9~Nkpv-XbvrL-K7PKSDAVdfFjwOmNsc5IOh9yR0L0DpjZQRTp91VaUb-EWsN5z9xFJQPdlAwVMyPX7J3TEIQkX4hy2x~noeen-A__",
  },
  {
    name: "Mobile Phones",
    src: "https://s3-alpha-sig.figma.com/img/2040/6c24/a82a2faa5326c3c93bcef550253622e5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0qzEF06iUL~bdHLpDNDc11ci-1CtF2BwFdQNDvc0VGPWJyx-IFSw2EIOgNRKSHhLkjRP3~wMxHpk0r-dTuEnrCM8WP3uXI-oHRPKbHkm3QBBjMy5aoIyjO9IBiNjoddBx6a8qiJYaRBvMWqhTpScNUZyHrx1eUQA9jaRWJDWBE-ul~KgILb-1pxgdBuH49Zddt2afYhrvS4nBU28x1cedyKmpkoL3yrIGa~QiD-DLAJuBfTQSZF0X1BY0lIo~-o59a2b8gnTttyH-xmMlSZOGF5DorFF8CCekfQOu6U7~WaDYkkw02Qy1mc6Ras4kMJY4r4veLeyzNLv-RwTo7pFA__",
  },
  {
    name: "Games",
    src: "https://s3-alpha-sig.figma.com/img/422a/b6d0/e6d25db54389f6495ab2e71963d1e244?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHmSGToBQ6hVftUfbVnnKMv0lM3fMwlvnLr-4iwQ8DL1F0N~veXhw5OU4cAFCBTfzLwlr~jgKtbYCv02NdQGgnHLi~U5ZGvLPznKgWtvWG1WkJZnGichp2SYLvX73JErVpIhl655qjgbQ4zOgbV4R-UkQFPrrEDGNQkUt1d-VJuSrtU3yAAgaiCkulQy-7dBedM~f8OU40pE1FjpY3~SdIbDEGbsTSSC4IYvKW94jJS0akegcrU-hKyr7ZZfJpEFB9~t5NZpqktEB1KL-yQCEHQt5tgBPmO~8M0EAJDG4x9WnHzt23z~0H9Bax7W5rSxTE60ZZeSMNpis7Sj0-Qz-A__",
  },
  {
    name: "Games",
    src: "https://s3-alpha-sig.figma.com/img/422a/b6d0/e6d25db54389f6495ab2e71963d1e244?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHmSGToBQ6hVftUfbVnnKMv0lM3fMwlvnLr-4iwQ8DL1F0N~veXhw5OU4cAFCBTfzLwlr~jgKtbYCv02NdQGgnHLi~U5ZGvLPznKgWtvWG1WkJZnGichp2SYLvX73JErVpIhl655qjgbQ4zOgbV4R-UkQFPrrEDGNQkUt1d-VJuSrtU3yAAgaiCkulQy-7dBedM~f8OU40pE1FjpY3~SdIbDEGbsTSSC4IYvKW94jJS0akegcrU-hKyr7ZZfJpEFB9~t5NZpqktEB1KL-yQCEHQt5tgBPmO~8M0EAJDG4x9WnHzt23z~0H9Bax7W5rSxTE60ZZeSMNpis7Sj0-Qz-A__",
  },
  {
    name: "Games",
    src: "https://s3-alpha-sig.figma.com/img/422a/b6d0/e6d25db54389f6495ab2e71963d1e244?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHmSGToBQ6hVftUfbVnnKMv0lM3fMwlvnLr-4iwQ8DL1F0N~veXhw5OU4cAFCBTfzLwlr~jgKtbYCv02NdQGgnHLi~U5ZGvLPznKgWtvWG1WkJZnGichp2SYLvX73JErVpIhl655qjgbQ4zOgbV4R-UkQFPrrEDGNQkUt1d-VJuSrtU3yAAgaiCkulQy-7dBedM~f8OU40pE1FjpY3~SdIbDEGbsTSSC4IYvKW94jJS0akegcrU-hKyr7ZZfJpEFB9~t5NZpqktEB1KL-yQCEHQt5tgBPmO~8M0EAJDG4x9WnHzt23z~0H9Bax7W5rSxTE60ZZeSMNpis7Sj0-Qz-A__",
  },
];

const ProductCategories = () => {
  const { isPrevDisabled, isNextDisabled, prevRef, nextRef, swiperRef } =
    useSwiper();

  return (
    <div className="">
      <Container>
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <h3 className="text-xl font-bold md:text-2xl">Explore</h3>

          <div className="flex gap-3">
            <SwiperButton ref={prevRef} disabled={isPrevDisabled} />
            <SwiperButton ref={nextRef} disabled={isNextDisabled} right />
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView="auto"
          className="mySwiper"
        >
          {exploreProducts.map((category, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }} className="mr-8">
              <CategoryItem {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ProductCategories;
