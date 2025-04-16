import Link from "next/link";

export function Header() {
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
                            <Link href="/screens/Tasks" className="hover:text-gray-300 transition-colors">
                                Tasks
                            </Link>
                        </li>
                        <li>
                            <Link href="/screens/Equipes" className="hover:text-gray-300 transition-colors">
                                Equipes
                            </Link>
                        </li>
                        <li>
                            <Link href="/screens/States" className="hover:text-gray-300 transition-colors">
                                Status 
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
