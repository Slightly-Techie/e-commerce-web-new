import Container from "../../../components/Container";

const Description = () => {
  return (
    <div className="mt-16 px-4 md:px-8 1280:mt-[12.5rem] lg:px-12">
      <Container>
        <div className="mb-[4.3125rem]">
          <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
            Description
          </h3>
          <p className="max-w-[764px] text-gray500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            error labore saepe sunt laudantium inventore repellat, harum animi
            asperiores reiciendis accusantium tenetur libero officiis ad
            quisquam, quaerat omnis. Quibusdam, nobis eaque? Totam!
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
            Specification
          </h3>
          <p className="max-w-[764px] text-gray500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, delectus vel? Perspiciatis sit modi, fugit temporibus
            delectus nemo sequi officiis aut laboriosam mollitia alias, impedit
            sed amet tempora unde ipsam dolor qui.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Description;
