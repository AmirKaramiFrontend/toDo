import Form from '../ui/Form';
import FormGroup from '../ui/FormGroup';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Register = function(){
    return (
        <Form>
            <FormGroup>
                <Label>Username or email</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input />
            </FormGroup>
            
            <Button type="warning" size="medium">Register</Button>
        </Form>
);
}

export default Register;