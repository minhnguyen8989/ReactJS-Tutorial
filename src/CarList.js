
const CarList = ({cars, title, handleDelete}) => {
    // const cars = props.cars;
    // const title = props.title;
    // const handleDelete = props.dandleDelete;


    return (
        // ObjectOutputExercise
    <div className="objectOutputExercise">
        <h1> { title }</h1>
        {cars.map((car) => (
            <div className="car-preview" key={car.id}>
                <h3>{car.year}</h3>
                <h4>{car.make}</h4>
                <h5>{car.color}</h5>
                <button onClick={() => handleDelete(car.id)}>Delete this post</button>
            </div>
            ))}
    </div>
    );
}

export default CarList;