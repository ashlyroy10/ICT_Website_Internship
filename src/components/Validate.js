// Staff Form Validation--------------------------------------------------------------------------------
export function ValidateCourse(values){
    
    let errors = {};

    const coursetitle_pattern = /^[a-zA-Z0-9]+([ \t]*[a-zA-Z0-9.,]+){4,99}$/
    const overview_pattern = /^[^\s][\w\s.,]{0,179}$/
    const description_pattern = /^(?! )[^\s]{0,499}$/
    const duration_pattern = /^(?! )([0-5][0-9]|60)$/
    const fee_pattern = /^[0-9]{1,3}(?:,?[0-9]{2,3})*(?:\.[0-9]{2})?$/

    if(values.coursetitle === "") {
        errors.coursetitle = "Cannot be Empty"
    } 
    else if(!coursetitle_pattern.test(values.coursetitle)){
        errors.coursetitle = "Not in the right format"
    }

    if(values.overview === "") {
        errors.overview = "Cannot be Empty"
    } 
    else if(!overview_pattern.test(values.overview)){
        errors.overview = "Not in the right format"
    }

    if(values.description === ""){
        errors.description = "Cannot be Empty"
    }
    else if(!description_pattern.test(values.description)){
        errors.description = "Not in the right format"
    }

    if(values.duration === ""){
        errors.duration = "Cannot be Empty"
    }
    else if(!duration_pattern.test(values.duration)){
            errors.duration = "Not in the right format"
    }

    if(values.fee === ""){
        errors.fee = "Cannot be Empty"
    }
    else if(!fee_pattern.test(values.fee)){
            errors.fee = "Not in the right format"
    }

    if(values.startdate === ""){
        errors.startdate = "Start Date Cannot be Empty";
    }

    if(values.enddate === "") {
        errors.enddate = "End Date cannot be Empty"
    }


return errors;
    
}

//Staff form validation--------------------------------------------------------------------------------

export function ValidateStaff(values){
    
    let errors = {};

    const staffname_pattern = /^[a-zA-Z]+([ \t]*[a-zA-Z]+){4,30}$/
    const designation_pattern = /^[a-zA-Z]+([ \t]*[a-zA-Z]+){4,50}$/

    if(values.staffname === "") {
        errors.staffname = "Cannot be Empty"
    } 
    else if(!staffname_pattern.test(values.staffname)){
        errors.staffname = "Not in the right format"
    }

    if(values.designation === "") {
        errors.designation = "Cannot be Empty"
    } 
    else if(!designation_pattern.test(values.designation)){
        errors.designation = "Not in the right format"
    }

    if(values.department === "") {
        errors.department = "Cannot be Empty"
    } 

return errors;
    
}

//Testimonials form validation--------------------------------------------------------------------------------

export function ValidateTestimonials(values){
    
    let errors = {};

    const testimonial_pattern = /^(?!\s)[\s\S]{0,99}$/
    const student_name_pattern = /^[a-zA-Z]+([ \t]*[a-zA-Z]+){4,30}$/
    const course_pattern = /^[a-zA-Z0-9]+([ \t]*[a-zA-Z0-9.,]+){4,99}$/
    const batch_pattern = /^[a-zA-Z0-9][a-zA-Z0-9\s]{0,98}[a-zA-Z0-9]$/

    if(values.testimonial === "") {
        errors.testimonial = "Cannot be Empty"
    } 
    else if(!testimonial_pattern.test(values.testimonial)){
        errors.testimonial = "Not in the right format"
    }

    if(values.student_name === "") {
        errors.student_name = "Cannot be Empty"
    } 
    else if(!student_name_pattern.test(values.student_name)){
        errors.student_name = "Not in the right format"
    }

    if(values.course === "") {
        errors.course = "Cannot be Empty"
    } 
    else if(!course_pattern.test(values.course)){
        errors.course = "Not in the right format"
    }

    if(values.batch === "") {
        errors.batch = "Cannot be Empty"
    } 
    else if(!batch_pattern.test(values.batch)){
        errors.batch = "Not in the right format"
    }

return errors;
    
}