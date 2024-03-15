import Page1 from "../pages/page1"
import Page2 from "../pages/page2"
import Page3 from "../pages/page3"
import Page4 from "../pages/page4"
import Page5 from "../pages/page5"
import Appbar from "../components/Appbar"


export default function Landingpage() {
    return (
        <>
            <Appbar />
            <section id="page1">
                <Page1 />
            </section>
            <section id="page2">
                <Page2 />
            </section>
            <section id="page3">
                <Page3 />
            </section>
            <section id="page4">
                <Page4 />
            </section>
            <section id="page5">
                <Page5 />
            </section>
        </>
    )
}
