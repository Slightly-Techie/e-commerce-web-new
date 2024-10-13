import logo from "../../assets/logo.svg";

type Props = {
    children: React.ReactNode;
};

export default function Checkout_layout({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-4">
                <div className="container mx-auto flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                </div>
            </header>

            <main className="flex-grow flex justify-center items-center">
                <div className="md:p-10 py-8 w-full max-w-md h-auto mx-auto sm:-mt-24 flex flex-col">
                    {children}
                </div>
            </main>
        </div>
    );
}
