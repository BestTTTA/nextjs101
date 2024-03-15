import Appbar from "../components/Appbar"
import Footerbar from "../components/Footerbar"
import Content from "../components/Content"

export default function Main() {
    return (
        <main className="flex justify-between w-full min-h-screen flex-col">
            <Appbar />
            <Content/>
            <Footerbar />
        </main>
    )
}
