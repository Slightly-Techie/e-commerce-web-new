import avatar from "../assets/images/products/Avatar.png";

const ReviewCard = () => {
  return (
    <div className="max-w-[366px] rounded-3xl border border-gray200 bg-gray50 p-6">
      <p className="mb-8 font-semibold text-gray600 md:mb-16">
        “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        esse? Necessitatibus quidem aspernatur, fugiat tempore accusantium
        mollitia quod saepe quam...”
      </p>

      <div className="flex gap-4 items-center">
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full md:h-[60px] md:w-[60px]">
          <img src={avatar} alt="" className="absolute inset-0 object-cover" />
        </div>
        <div>
          <p className="mb-0 font-bold">Micheal Mensah</p>
          <p className="text-sm text-[#757575]">June 30, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
