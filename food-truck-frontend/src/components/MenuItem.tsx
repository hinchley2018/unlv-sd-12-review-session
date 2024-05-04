import { MenuItem } from "../interfaces/MenuItem";

//extend the interface so we don't have deeper props
interface MenuItemProps extends MenuItem{
    //pollutes the interface if it was put in the thing we read from api
    //by extending adding on
    onClick(): void
}
export function MenuItemComponent(props: MenuItemProps){
    return (
        <div>
            {props.title}:{props.price}
        </div>
    )
}