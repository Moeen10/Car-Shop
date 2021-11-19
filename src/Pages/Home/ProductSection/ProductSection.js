import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './Service';
// import Service from './../Service/Service';


const Services = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://blooming-temple-36736.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                console.log(data)
            })

    }, [])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      
                        cars.slice(0, 6).map(service => <Service
                                            key={service.name}
                                            service={service}
                                        ></Service>)
                                        }



                    
                </Grid>
                   


            </Container>
        </Box>
    );
};

export default Services;









// import React, { useEffect, useState } from 'react';
// import Watch from '../../OurWatches/Watch/Watch';

// const ProductSection = () => {

//     const [watches, setWatches] = useState([])

//     useEffect(() => {
//         fetch('https://blooming-temple-36736.herokuapp.com/watches')
//             .then(res => res.json())
//             .then(data => {
//                 setWatches(data)
//             })

//     }, [])


//     return (

//         <div className="packages">
//             <h2 className="section-heading">Our Exclusive Watches</h2>
//             <h5 className='sub-heading'>Have a look on our recently launched watches for sure you will loved those</h5>
//             <div className="watch-grid">
//                 {watches.slice(0, 6).map(watch => <Watch i key={watch._id} watch={watch}></Watch>)}
                   
//             </div>

//         </div>
//     );
// };

// export default ProductSection;







// import React, { useEffect, useState } from 'react';
// import Watch from '../../OurWatches/Watch/Watch';

// const ProductSection = () => {

//     const [watches, setWatches] = useState([])

//     useEffect(() => {
//         fetch('https://hidden-tor-06620.herokuapp.com/watches')
//             .then(res => res.json())
//             .then(data => {
//                 setWatches(data)
//             })

//     }, [])


//     return (

//         <div className="packages">
//             <h2 className="section-heading">Our Exclusive Watches</h2>
//             <h5 className='sub-heading'>Have a look on our recently launched watches for sure you will loved those</h5>
//             <div className="watch-grid">
//                 {watches.slice(0, 6).map(watch => <Watch i key={watch._id} watch={watch}></Watch>)}

//             </div>

//         </div>
//     );
// };

// export default ProductSection;