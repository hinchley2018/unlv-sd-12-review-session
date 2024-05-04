interface CustomerFormProps{
    firstName: string;
    lastName: string;
    billingAddress: string;
    billingZipCode: string;
    onSubmit(): () => void;
    //more generic handler to be more reusable
    onFieldChanged(): (fieldName: string, fieldData: any) => void
}

//good reusable thing to put in an npm pkg
export function CustomerForm(props: CustomerFormProps){
    //props de-structuring
    let {firstName, lastName, billingAddress, billingZipCode, onSubmit, onFieldChanged} = props
    return (
        <form>
            
        </form>
    )
}