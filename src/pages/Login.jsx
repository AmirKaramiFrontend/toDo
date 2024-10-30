import Form from "../ui/Form";
import Input from "../ui/Input";
import FormGroup from "../ui/FormGroup";
import Label from "../ui/Label";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import ViewPortSection from "../ui/ViewPortSection";



const Login = function(){
    const handleLogin = function(e){
        e.preventDefault();
    }
    return (
        <ViewPortSection>
            <Form bgColor="rgba(182, 181, 181, 0.2)">
                <FormGroup position="center">
                    <Heading as="h2">Sign in</Heading>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Username or email
                    </Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Password
                    </Label>
                    <Input />
                </FormGroup>
                <FormGroup position="center">
                    <Button type="primary" size="medium" space="medium" onClick={handleLogin}>Sign in</Button>
                </FormGroup>                
            </Form>
        </ViewPortSection>
    );
}

export default Login;