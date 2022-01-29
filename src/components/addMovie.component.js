import DamoPage from "./common/demoPage.component";

const AddMovie = (props) => {
    console.log(props)

    return (
        <DamoPage>
            <h1>{props.name} Component</h1>
        </DamoPage>
    );
}
 
export default AddMovie;