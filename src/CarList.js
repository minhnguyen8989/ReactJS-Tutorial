
const CarList = (props) => {
    const cars = props.cars;

    return (
    <div className="objectOutputExercise">
        <h1>Object Output Exercise</h1>
        {cars.map((car) => (
            <div className="car-preview" key={car.id}>
                <h3>{car.year}</h3>
                <h4>{car.make}</h4>
                <h5>{car.color}</h5>
            </div>
        ))}
    </div>
    );
}

export default CarList;