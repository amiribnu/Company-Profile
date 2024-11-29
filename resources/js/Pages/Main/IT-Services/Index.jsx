import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react"

export default function Index(props) {
    return (
        <div>
            <Head title="Layanan IT"/>

            <h1>Layanan IT</h1>
        </div>
    )
}

Index.layout = (page) => (<MainLayout children={page} />)