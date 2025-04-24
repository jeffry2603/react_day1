function Description(props) {

    console.log(props);
    
    return (
        <>
            <p>
                This is a simple React application that allows users to create and manage a list of tasks. Users can add new tasks, mark them as completed, and delete them from the list. The application uses local storage to persist the task data, ensuring that the tasks remain available even after refreshing the page.
            </p>
            <br />
            <div>
                the answer for the equation of {props.a} and {props.b} is {props.c}
            </div>
        </>
    )
}

export default Description;