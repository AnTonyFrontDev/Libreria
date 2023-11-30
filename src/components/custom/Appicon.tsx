import {Icon, IconProps} from "@iconify/react";
import {APP_ICONS} from "../../shared/constants/icons-contants";

export interface AppIconProps extends Partial<IconProps> {
    type: keyof typeof APP_ICONS;
    wrapperClassName?: string
}

export const AppIcon = (props: AppIconProps) => {
    return (
        <div className={`${props.wrapperClassName || ''}`}>
            <Icon {...props} width={props.width || 18} icon={APP_ICONS[props.type]}/>
            {props.children && props.children}
        </div>
    );

}