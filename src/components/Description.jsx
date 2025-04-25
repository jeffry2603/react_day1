function Description(props) {

    let a=50;
  let b=45;
//get the function from the parent component as a prop

//execute the function to pass the values to the parent component

props.get(a,b)
    return (
        <>
            <p>
                This is a simple React application that allows users to create and manage a list of tasks. Users can add new tasks, mark them as completed, and delete them from the list. The application uses local storage to persist the task data, ensuring that the tasks remain available even after refreshing the page.
            </p>
            <br />
            <div>
                the answer for the equation of {a} and {b} is {a+b}
            </div>
        </>
    )
}

export default Description;





































