import Hover from "./Hover"
import Image from "./Image"
import withHover from "./withHover"
const ComponentWithHover = withHover(Image)

function Content() {
    return (
        <div
            className="content">
            <ComponentWithHover
                src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg">
            </ComponentWithHover>
        </div>
    )
}
export default Content