import { Button } from "./Button";
import userIcon from 'assets/icons/user.svg'

export default {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};
const Template = (args) => <Button {...args}>Account</Button>

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    bgColor: 'white',
    textColor: 'purple',
    boderColor: '#000'
}
export const HeaderButton = Template.bind({});
HeaderButton.args = {
    icon: { userIcon },
    width: '90px',
}

export const ShopingButton = () => {
    <Button icon={userIcon}>
        Shopping
    </Button>
}