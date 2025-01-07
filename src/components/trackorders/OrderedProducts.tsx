export default function OrderedProducts() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <ProductItem />
      <ProductItem />
    </div>
  );
}

function ProductItem() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="https://s3-alpha-sig.figma.com/img/71de/7823/10bb49a6369db8469303e74d7cf77c21?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjKp3yGcP-wAv6AEVJGc48AtPRusRdwJvXzQPbUSgnoPz5sFvmsIpnDRfiEBiDFXUaccXYgnKxijOWQrRgWtsnsMuexOHGrTgLrk~tBG~ari6vDUTpQ1thBNhYQMoAOnVDc6VrFNvrTHmIgOIoeMaEaGd9A3Nhofwb62Q7~coGU0h7py~9Tke7FSDAH5sYzK4bXQ8wUwfl1eL2pM9I-A9xAvKwB8uL4gHoL1Kv2N4PVwizm0S09cuDgt7lu1Fim2tAeylRIyrmQwLY7whq~q1WAi1iORdlTIjXOnV00qp~t1iPKytNdApDDvAmgjcLrqqjxC3o83ZH9tOBDO38q2OA__"
        alt="product_name"
        className="size-16 rounded-[16px]"
      />
      <div>
        <h5 className="line-clamp-1 text-sm font-medium text-darkPrimary md:text-base">
          Apple macbook Pro 16” Laptop
        </h5>
        <p className="text-sm text-gray500 md:text-base">Computing</p>
      </div>
    </div>
  );
}
