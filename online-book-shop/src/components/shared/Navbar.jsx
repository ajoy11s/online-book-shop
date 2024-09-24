function Navbar() {
    return (
            <section className="bg-gray-200">
                <div className="container mx-auto">
                    <header className="flex items-center justify-between">
                        <img src="src/assets/logo/book_shop_icon.png" alt="logo" className="h-16 w-16" />
                        <nav className="space-x-4 mr-8">
                            <span className="hover:bg-slate-400 cursor-pointer">Home</span>
                            <span className="hover:bg-slate-400 cursor-pointer">About</span>
                            <span className="hover:bg-slate-400 cursor-pointer">Blog</span>
                            <span className="hover:bg-slate-400 cursor-pointer">FAQ</span>
                        </nav>
                    </header>
                </div>
            </section>     
    );
}
export default Navbar;