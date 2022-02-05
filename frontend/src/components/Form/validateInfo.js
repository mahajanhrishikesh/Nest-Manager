export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()){
        errors.name = "Name required";
    }
    // email
    if(!values.email){
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.floorplan){
        errors.floorplan = 'Enter Required FloorPlan';
    }

    if(!values.Leaseterm)
    {
        errors.leaseterm = 'Enter Lease Term Period';
    }

    return errors;
}