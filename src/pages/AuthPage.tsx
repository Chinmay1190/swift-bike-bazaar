
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      toast.success("Login successful!");
      setIsLoading(false);
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    // Simulate registration API call
    setTimeout(() => {
      toast.success("Registration successful! Please check your email to verify your account.");
      setIsLoading(false);
    }, 1500);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-md">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLoginSubmit}>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Forgot password?
                      </Button>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Or continue with
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="w-full">Google</Button>
                <Button variant="outline" className="w-full">Facebook</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your details to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegisterSubmit}>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={registerForm.name}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      value={registerForm.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                By creating an account, you agree to our{" "}
                <Button variant="link" className="p-0 h-auto text-sm">
                  Terms & Conditions
                </Button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
