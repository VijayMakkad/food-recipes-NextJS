import Link from "next/link";



export default function NotFound(){
    return (
        <div className="w-100 flex flex-col items-center justify-center min-h-screen">
            <h1>Page Not Found</h1>
            <Link href={"/"}>Go Home</Link>
        </div>
    )
}