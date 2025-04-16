import Link from "next/link";

export function HeaderPublic() {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Link href="/">
                    TaskManager
                    </Link>

                </div>

                <nav>
                    <ul className="flex space-x-6 text-lg">
 
                        <li>
                            <Link href="/screens/Login" className="hover:text-gray-300 transition-colors">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/screens/Register" className="hover:text-gray-300 transition-colors">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
