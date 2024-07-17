import OrderHistoryHeader from "@/components/OrderHistoryHeader";
import OrderItem from "@/components/OrderItem";
import { Accordion } from "@/components/ui/accordion";
import { Table } from "@/components/ui/table";

const OrderHistory = () => {
  return (
    <div className="min-h-[84vh] rounded-tl-2xl rounded-tr-2xl bg-white px-4 py-[1.625rem] md:px-6 lg:ml-[276px]">
      <h4 className="mb-6 text-lg font-bold">Order history</h4>

      <Table>
        <OrderHistoryHeader />

        <article className="mt-3 rounded-md">
          <Accordion type="single" collapsible className="w-full pb-2">
            <OrderItem />
            {/* <OrderItem /> */}
          </Accordion>
        </article>
      </Table>
    </div>
  );
};

export default OrderHistory;
