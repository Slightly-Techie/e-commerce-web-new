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

            <main className="mx-auto">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
}
