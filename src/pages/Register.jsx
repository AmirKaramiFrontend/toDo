import Form from '../ui/Form';
import FormGroup from '../ui/FormGroup';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

const Register = function(){
    return (
        <Form>
            <Heading as="h2">Sign up</Heading>
            <FormGroup>
                <Label>Username or email</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input />
            </FormGroup>
            <FormGroup positionText="center">
                <Button type="warning" size="medium">Register</Button>
            </FormGroup>
        </Form>
);
}

export default Register;