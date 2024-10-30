
import Form from '../ui/Form';
import FormGroup from '../ui/FormGroup';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import ViewPortSection from '../ui/ViewPortSection';

const Register = function(){
    return (
        <ViewPortSection>
            <Form bgColor="rgba(182, 181, 181, 0.2)">
                <FormGroup position="center">
                    <Heading as="h2">Sign up</Heading>
                </FormGroup>
                <FormGroup>
                    <Label>Username or email</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Confirm password</Label>
                    <Input />
                </FormGroup>
                <FormGroup position="center">
                    <Button type="warning" space="medium" size="medium">Register</Button>
                </FormGroup>
            </Form>
        </ViewPortSection>
);
}

export default Register;