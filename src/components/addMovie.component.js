import DemoPage from "./common/demoPage.component";

const AddMovie = (props) => {
    console.log(props)

    return (
        <DemoPage>
            <h1>{props.name} Component</h1>
        </DemoPage>
    );
}
 
export default AddMovie;