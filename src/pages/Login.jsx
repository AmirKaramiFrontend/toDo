import Form from "../ui/Form";
import Input from "../ui/Input";
import FormGroup from "../ui/FormGroup";
import Label from "../ui/Label";
import Button from "../ui/Button";
import Heading from "../ui/Heading";



const Login = function(){
    const handleLogin = function(e){
        e.preventDefault();
    }
    return (
            <Form>
                <Heading as="h2">Sign in</Heading>
                <FormGroup>
                    <Label>Username or email</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input />
                </FormGroup>
                <FormGroup positionText="center">
                    <Button type="primary" size="medium" onClick={handleLogin}>Login</Button>
                </FormGroup>                
            </Form>
    );
}

export default Login;