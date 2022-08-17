import images from './images';

const popularCars = [
    {
        name: "Koenigsegg",
        isLike: true,
        carType: "Sport",
        image: images.car1,
        gasoline: "90L",
        manual: "Manual",
        consists: "2",
        priceDay: "$99.00",
        timeType: "day", 
    },
    {
        name: "Nissan GT-R",
        isLike: false,
        carType: "Sport",
        image: images.car2,
        gasoline: "80L",
        manual: "Manual",
        consists: "2",
        priceDay: "$80.00", 
        timeType: "day", 
    },
    {
        name: "Roll-Royce",
        isLike: true,
        carType: "Sedan",
        image: images.car3,
        gasoline: "70L",
        manual: "Manual",
        consists: "4",
        priceDay: "$96.00",
        timeType: "day", 
    },
    {
        name: "Nissan GT-R",
        isLike: false,
        carType: "Sport",
        image: images.car2,
        gasoline: "80L",
        manual: "Manual",
        consists: "2",
        priceDay: "$80.00", 
        timeType: "day", 
    },
]

export default { popularCars}